import { describe, bench } from 'vitest';
import { handleReadPdfFunc } from '../../src/handlers/readPdf.js';

// Test URL for benchmarking
const TEST_PDF_URL = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

describe('PDF Reader Performance Benchmarks', () => {
  // Benchmark getting only metadata and page count
  bench(
    'Get Metadata & Page Count',
    async () => {
      try {
        await handleReadPdfFunc({
          url: TEST_PDF_URL,
          include_metadata: true,
          include_page_count: true,
          include_full_text: false,
        });
      } catch (error: unknown) {
        // Explicitly type error as unknown
        console.warn(
          `Benchmark 'Get Metadata & Page Count' failed: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    },
    { time: 1000 }
  ); // Run for 1 second

  // Benchmark getting full text
  bench(
    'Get Full Text',
    async () => {
      try {
        await handleReadPdfFunc({
          url: TEST_PDF_URL,
          include_metadata: false,
          include_page_count: false,
          include_full_text: true,
        });
      } catch (error: unknown) {
        // Explicitly type error as unknown
        console.warn(
          `Benchmark 'Get Full Text' failed: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    },
    { time: 1000 }
  );

  // Benchmark getting all content (metadata, page count, and full text)
  bench(
    'Get All Content',
    async () => {
      try {
        await handleReadPdfFunc({
          url: TEST_PDF_URL,
          include_metadata: true,
          include_page_count: true,
          include_full_text: true,
        });
      } catch (error: unknown) {
        // Explicitly type error as unknown
        console.warn(
          `Benchmark 'Get All Content' failed: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    },
    { time: 1000 }
  );

  // Benchmark handling a non-existent URL (error path)
  bench(
    'Handle Non-Existent URL',
    async () => {
      try {
        await handleReadPdfFunc({
          url: 'https://example.com/non-existent.pdf',
          include_metadata: true,
          include_page_count: true,
        });
      } catch (error: unknown) {
        // Explicitly type error as unknown
        console.warn(
          `Benchmark 'Handle Non-Existent URL' failed: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    },
    { time: 1000 }
  );

  // Add more benchmarks as needed (e.g., larger PDFs, different URL sources)
});
