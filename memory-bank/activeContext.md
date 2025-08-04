<!-- Version: 1.36 | Last Updated: 2025-04-07 | Updated By: Sylph -->

# Active Context

## Current Development Status

### Recent Changes (Latest Session)

- **Simplified Parameter Structure:** Modified `read_pdf` handler and schema to accept a single `url` parameter instead of an array of sources. Removed the `pages` parameter to simplify usage.
- **URL-Only Support:** Removed all local file path support, now only processes PDFs from public URLs.
- **Updated Documentation:** Synchronized all documentation to reflect the simplified parameter structure and URL-only approach.
