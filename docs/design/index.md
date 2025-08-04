# Design Philosophy

The PDF Reader MCP Server is built upon several core principles:

1.  **Security First:**

    - **URL-Only Access:** The absolute primary goal. All PDF access is restricted to public URLs only. This prevents the AI agent from accessing unintended files on the user's system.
    - **No Local File Access:** The server only processes PDFs from public URLs, eliminating any local file system access.
    - **No Arbitrary Execution:** The server only performs PDF reading operations, not arbitrary file system modifications or command execution.

2.  **Efficiency & Resourcefulness:**

    - **Structured Data:** Instead of sending potentially huge raw PDF content (which is often impractical for LLMs), the server extracts specific, structured information (text, metadata, page count).
    - **Targeted Extraction:** Allows requesting text from specific pages, minimizing the amount of data transferred and processed.
    - **Asynchronous Operations:** Uses Node.js async I/O to avoid blocking the event loop during PDF parsing.

3.  **Simplicity & Ease of Integration:**

    - **Single Tool Focus:** Consolidates functionality into a single `read_pdf` tool with clear parameters, making it easier for AI agents to learn and use.
    - **Standard MCP:** Leverages the `@modelcontextprotocol/sdk` for standard communication and error handling.
    - **Clear Schemas:** Uses Zod for defining and validating input, providing clear contracts for tool usage.
    - **Multiple Invocation Methods:** Supports easy use via `npx` or Docker for straightforward deployment in various MCP host environments.

4.  **Minimalism & Reliability:**
    - **Minimal Dependencies:** Relies primarily on the robust and widely-used `pdfjs-dist` library for core PDF parsing, minimizing external failure points.
