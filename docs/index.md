---
title: PDF Reader MCP Server
tagline: An MCP server enabling AI agents to read text, metadata, and page counts from PDF files via URL.
---

# PDF Reader MCP Server

Empower your AI agents with secure PDF reading capabilities through URL access.

## Features

- **Text Extraction:** Read full text or specific pages from PDF files
- **Metadata Retrieval:** Get author, title, creation date, and other document information
- **Page Counting:** Determine the total number of pages in a PDF
- **Multi-Source Processing:** Handle multiple PDF URLs in a single request
- **Structured Output:** Receive data in a predictable JSON format

## Security

The server only processes PDFs from public URLs, ensuring no local file system access and maintaining security boundaries.

## Quick Start

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

**Note:** By default, only the first two pages are processed unless `include_full_text` is set to `true`.

## Installation

```bash
npm install @sylphlab/pdf-reader-mcp
```

See the [Installation Guide](./guide/installation.md) for detailed setup instructions.
