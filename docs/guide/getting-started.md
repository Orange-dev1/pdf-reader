# Getting Started

This guide assumes you have an MCP client or host environment capable of launching and communicating with the PDF Reader MCP Server.

## 1. Launch the Server

The server can be launched in any environment since it only processes PDFs from public URLs.

- **If installed via npm/pnpm:** Your MCP host might manage this automatically via `npx @sylphlab/pdf-reader-mcp`.
- **If running standalone:** `node /path/to/pdf-reader-mcp/build/index.js`
- **If using Docker:** `docker run -i --rm sylphlab/pdf-reader-mcp:latest`

## 2. Using the `read_pdf` Tool

The server provides a single primary tool: `read_pdf`.

**Tool Input Schema:**

The `read_pdf` tool accepts an object with the following properties:

- `url` (string, required): URL of the PDF file.
- `include_full_text` (boolean, optional, default: `false`): Include the full text content of the PDF.
- `include_metadata` (boolean, optional, default: `false`): Include metadata and info objects for the PDF.
- `include_page_count` (boolean, optional, default: `true`): Include the total number of pages for the PDF.

_(See the [API Reference](./api/) (once generated) for the full JSON schema)_

**Example MCP Request (Get metadata and page count for one PDF):**

```json
{
  "tool_name": "read_pdf",
  "arguments": {
    "url": "https://example.com/document.pdf",
    "include_metadata": true,
    "include_page_count": true,
    "include_full_text": false
  }
}
```

**Example MCP Request (Get full text from a PDF):**

```json
{
  "tool_name": "read_pdf",
  "arguments": {
    "url": "https://example.com/document.pdf",
    "include_full_text": true,
    "include_metadata": false,
    "include_page_count": false
  }
}
```

## 3. Understanding the Response

The response will be an object named `results`, containing a single result for the PDF. The result object contains:

- `source` (string): The original URL provided in the request.
- `success` (boolean): Indicates if processing was successful.
- `data` (Object, optional): Present if `success` is `true`. Contains the requested data:
  - `num_pages` (number, optional): Total page count (if `include_page_count` was true).
  - `info` (Object, optional): PDF information dictionary (if `include_metadata` was true).
  - `metadata` (Object, optional): PDF metadata (if `include_metadata` was true).
  - `full_text` (string, optional): Full text content (if `include_full_text` was true).
- `error` (string, optional): Present if `success` is `false`. Contains a description of the error.

_(See the [API Reference](./api/) (once generated) for detailed response structure and error codes.)_
