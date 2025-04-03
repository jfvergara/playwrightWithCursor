# Playwright Page Object Model Project

This project demonstrates the implementation of Playwright tests using the Page Object Model (POM) design pattern.

## Project Structure

```
├── tests/
│   ├── pages/           # Page Object classes
│   │   ├── BasePage.js
│   │   └── LoginPage.js
│   ├── utils/          # Utility functions
│   │   └── helpers.js
│   └── login.spec.js   # Test files
├── playwright-report/  # HTML test reports
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

## Test Reports

This project uses Playwright's built-in HTML reporter for test reporting. The reports include:
- Test results and status
- Screenshots on failure
- Videos on failure
- Test steps and details
- Test duration and timing
- Environment information

After running tests, you can find the HTML report in the `playwright-report` directory. Open `index.html` in your browser to view the report.

## Page Object Model

This project uses the Page Object Model design pattern to organize test code. Each page in the application has its own class that extends the `BasePage` class. This approach provides:

- Better code organization
- Reusability of page elements and actions
- Easier maintenance
- Reduced code duplication

## GitHub Actions

The project includes a GitHub Actions workflow that:
1. Runs tests on pull requests and pushes to main/master branch
2. Generates HTML test reports
3. Uploads test reports as artifacts (available for 30 days)

The workflow is defined in `.github/workflows/playwright.yml` and includes:
- Node.js setup
- Dependency installation
- Playwright browser installation
- Test execution
- Report upload

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