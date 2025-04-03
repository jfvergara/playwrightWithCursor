# Playwright Page Object Model Project

This project demonstrates the implementation of Playwright tests using the Page Object Model (POM) design pattern and Allure Reports for test reporting.

## Project Structure

```
├── tests/
│   ├── pages/           # Page Object classes
│   │   ├── BasePage.js
│   │   └── LoginPage.js
│   ├── utils/          # Utility functions
│   │   └── helpers.js
│   └── login.spec.js   # Test files
├── allure-results/     # Allure test results
├── allure-report/      # Generated Allure reports
├── playwright.config.js
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm run test
```

- Run tests in UI mode:
```bash
npm run test:ui
```

- Run tests in debug mode:
```bash
npm run test:debug
```

## Allure Reports

This project uses Allure Reports for test reporting. Allure provides detailed test reports with:
- Test results and status
- Screenshots on failure
- Videos on failure
- Test steps and details
- Test duration and timing
- Environment information

### Working with Allure Reports

1. Generate Allure report:
```bash
npm run report:generate
```

2. Open Allure report in browser:
```bash
npm run report:open
```

3. Clear Allure results and reports:
```bash
npm run report:clear
```

## Page Object Model

This project uses the Page Object Model design pattern to organize test code. Each page in the application has its own class that extends the `BasePage` class. This approach provides:

- Better code organization
- Reusability of page elements and actions
- Easier maintenance
- Reduced code duplication

## GitHub Actions

The project includes a GitHub Actions workflow that:
1. Runs tests on pull requests and pushes to main/master branch
2. Generates Allure reports
3. Uploads test results and reports as artifacts (available for 30 days)

The workflow is defined in `.github/workflows/playwright.yml` and includes:
- Node.js setup
- Dependency installation
- Playwright browser installation
- Test execution
- Allure report generation
- Artifact upload

## Browser Support

The project is configured to run tests in multiple browsers:
- Chromium
- Firefox
- WebKit (Safari)

Additional browser configurations are available in `playwright.config.js`:
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)
- Microsoft Edge
- Google Chrome

To enable additional browsers, uncomment the relevant configuration in `playwright.config.js`. 