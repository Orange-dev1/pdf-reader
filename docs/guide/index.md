# Guide

Welcome to the PDF Reader MCP Server guide. This server provides a secure and efficient way for AI agents (like Cline) using the Model Context Protocol (MCP) to interact with PDF files via URL.

## Overview

The PDF Reader MCP Server is designed to:

- **Extract Text:** Read full text content or specific pages from PDF files.
- **Get Metadata:** Retrieve PDF metadata such as author, title, creation date, etc.
- **Count Pages:** Get the total number of pages in a PDF.
- **Process Multiple Sources:** Handle multiple PDF URLs in a single request.
- **Provide Structured Output:** Return data in a predictable JSON format.

## Key Features

- **Security:** URL-only access ensures no local file system access.
- **Flexibility:** Handles any public PDF URL.
- **Efficiency:** Allows targeted extraction of specific pages or ranges.
- **Integration:** Designed for seamless use within MCP environments.

## Quick Navigation

- **[Getting Started](./getting-started.md):** Learn how to set up and use the server.
- **[Installation](./installation.md):** Detailed installation instructions.
- **[API Reference](../api/):** Complete API documentation (when available).

## Use Cases

- **Document Analysis:** Extract text from research papers, reports, or manuals.
- **Content Summarization:** Get specific pages for summarization tasks.
- **Metadata Extraction:** Retrieve document information for cataloging.
- **Multi-Document Processing:** Handle multiple PDFs in batch operations.
