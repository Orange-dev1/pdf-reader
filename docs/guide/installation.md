# Installation

## Prerequisites

- Node.js (>= 18.0.0 recommended)
- npm (comes with Node.js)

## Using npm (Recommended)

To use the server in your project or MCP host environment, install it as a dependency:

```bash
npm install @sylphlab/pdf-reader-mcp
```

## Running Standalone (for testing/development)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sylphlab/pdf-reader-mcp.git
    cd pdf-reader-mcp
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Build the project:**

    ```bash
    npm run build
    ```

4.  **Run the server:**
    The server communicates via stdio. You'll typically run it from an MCP host.
    ```bash
    node build/index.js
    ```

## Using Docker

A Docker image is available on Docker Hub.

```bash
docker pull sylphlab/pdf-reader-mcp:latest
```

To run the container:

```bash
docker run -i --rm sylphlab/pdf-reader-mcp:latest
```

The server only processes PDFs from public URLs, so no volume mounting is required.
