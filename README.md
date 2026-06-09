# Planit Automation Assessment

UI test automation framework developed using **Playwright**, **TypeScript**, and **Page Object Model (POM)** for the Planit Technical Assessment.

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Jenkins CI/CD ready

## Application Under Test

https://jupiter.cloud.planittesting.com/#/

## Project Structure

```text
pages/
  HomePage.ts
  ContactPage.ts
  ShopPage.ts
  CartPage.ts

tests/
  contact_validation.spec.ts
  contact_submission.spec.ts
  cart.spec.ts

playwright.config.ts
Jenkinsfile
package.json
README.md

## Manual Execution Steps

### Prerequisites

Ensure the following software is installed:

* Node.js (v18 or above)
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/malkimaduka/planit-automation-assessment.git
cd planit-automation-assessment
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browser

```bash
npx playwright install chromium
```

### Execute All Tests

```bash
npx playwright test
```

### Execute Tests in Headed Mode

```bash
npx playwright test --headed
```

### Execute a Specific Test File

```bash
npx playwright test tests/contact_validation.spec.ts

npx playwright test tests/contact_submission.spec.ts

npx playwright test tests/cart.spec.ts
```

### View HTML Report

```bash
npx playwright show-report
```

Playwright generates the HTML report in the following directory:

```text
playwright-report/
```
