## Running Tests in Jenkins

This framework is prepared for execution in a Jenkins CI pipeline.

Pipeline stages:
1. Checkout source code
2. Install project dependencies
3. Install Playwright browsers
4. Execute Playwright tests
5. Archive Playwright reports and test results

Command used in pipeline:

```bash
npx playwright test

