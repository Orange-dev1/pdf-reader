# Testing

This project uses [Vitest](https://vitest.dev/) for testing, configured with strict TypeScript checking and comprehensive coverage requirements.

## Test Structure

- **Unit Tests:** Located in `test/` directory, mirroring the source structure.
- **Benchmark Tests:** Located in `test/benchmark/` for performance testing.
- **Fixtures:** Sample PDF files in `test/fixtures/` for testing.

## Running Tests

- **`npm run test`**: Run all tests in watch mode (recommended for development).
- **`npm run test:run`**: Run all tests once (useful for CI/CD).
- **`npm run test:ui`**: Run tests with Vitest's UI interface.
- **`npm run test:bench`**: Run benchmark tests to measure performance.
- **`npm run test:cov`**: Run all tests and generate a detailed coverage report in the `./coverage/` directory (view `index.html` in that directory for an interactive report). This command will fail if coverage thresholds are not met.

## Test Coverage

The project maintains high test coverage with strict thresholds:

- **Statements:** 100%
- **Branches:** 100%
- **Functions:** 100%
- **Lines:** 100%

## Key Test Areas

- **PDF Processing:** Core PDF reading functionality is thoroughly tested with various PDF types and sizes.
- **Error Handling:** Comprehensive testing of error scenarios including invalid URLs, network failures, and malformed PDFs.
- **Schema Validation:** Zod schema validation is tested to ensure proper input validation.
- **Performance:** Benchmark tests measure performance across different PDF processing scenarios.

## Test Data

The `test/fixtures/` directory contains sample PDF files used for testing:

- `sample.pdf`: A basic PDF file for general testing.
- Additional PDFs may be added for specific test scenarios.

## Continuous Integration

Tests are automatically run on every pull request and commit to the main branch via GitHub Actions, ensuring code quality and preventing regressions.
