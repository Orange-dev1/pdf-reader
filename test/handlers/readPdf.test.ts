import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';

// Define a type for the expected structure after JSON.parse
interface ExpectedResultType {
  results: { source: string; success: boolean; data?: object; error?: string }[];
}

// --- Mocking pdfjs-dist ---
const mockGetMetadata = vi.fn();
const mockGetPage = vi.fn();
const mockGetDocument = vi.fn();

vi.doMock('pdfjs-dist', () => {
  return {
    getDocument: mockGetDocument,
  };
});

// Dynamically import the handler *once* after mocks are defined
// Define a more specific type for the handler's return value content
interface HandlerResultContent {
  type: string;
  text: string;
}
let handler: (args: unknown) => Promise<{ content: HandlerResultContent[] }>;

beforeAll(async () => {
  // Only import the tool definition now
  const { readPdfToolDefinition: importedDefinition } = await import(
    '../../src/handlers/readPdf.js'
  );
  handler = importedDefinition.handler;
});

// Renamed describe block as it now only tests the handler
describe('handleReadPdfFunc Integration Tests', () => {
  beforeEach(() => {
    vi.resetAllMocks();

    const mockDocumentAPI = {
      numPages: 3,
      getMetadata: mockGetMetadata,
      getPage: mockGetPage,
    };
    const mockLoadingTaskAPI = { promise: Promise.resolve(mockDocumentAPI) };
    mockGetDocument.mockReturnValue(mockLoadingTaskAPI);
    mockGetMetadata.mockResolvedValue({
      info: { PDFFormatVersion: '1.7', Title: 'Mock PDF' },
      metadata: {
        _metadataMap: new Map([['dc:format', 'application/pdf']]),
        get(key: string) {
          return this._metadataMap.get(key);
        },
        has(key: string) {
          return this._metadataMap.has(key);
        },
        getAll() {
          return Object.fromEntries(this._metadataMap);
        },
      },
    });
    // Removed unnecessary async and eslint-disable comment
    mockGetPage.mockImplementation((pageNum: number) => {
      if (pageNum > 0 && pageNum <= mockDocumentAPI.numPages) {
        return {
          getTextContent: vi
            .fn()
            .mockResolvedValueOnce({ items: [{ str: `Mock page text ${String(pageNum)}` }] }),
        };
      }
      throw new Error(`Mock getPage error: Invalid page number ${String(pageNum)}`);
    });
  });

  // --- Integration Tests for handleReadPdfFunc ---

  it('should successfully read full text, metadata, and page count for a URL', async () => {
    const args = {
      url: 'https://example.com/test.pdf',
      include_full_text: true,
      include_metadata: true,
      include_page_count: true,
    };

    const result = await handler(args);
    const parsedResult = JSON.parse(result.content[0].text) as ExpectedResultType;

    expect(parsedResult.results).toHaveLength(1);
    expect(parsedResult.results[0].success).toBe(true);
    expect(parsedResult.results[0].source).toBe('https://example.com/test.pdf');
    expect(parsedResult.results[0].data).toHaveProperty('full_text');
    expect(parsedResult.results[0].data).toHaveProperty('info');
    expect(parsedResult.results[0].data).toHaveProperty('metadata');
    expect(parsedResult.results[0].data).toHaveProperty('num_pages');
  });
});
