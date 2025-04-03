# Playwright Page Object Model Project

This project demonstrates the implementation of Playwright tests using the Page Object Model (POM) design pattern with support for multiple environments.

## Project Structure

```
├── tests/
│   ├── pages/           # Page Object classes
│   │   ├── BasePage.js
│   │   └── LoginPage.js
│   ├── utils/          # Utility functions
│   │   └── helpers.js
│   └── login.spec.js   # Test files
├── config/             # Environment configurations
│   ├── dev.config.js   # Development environment
│   ├── qa.config.js    # QA environment
│   └── prod.config.js  # Production environment
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

### Default Environment (Development)
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

### Environment-Specific Tests

- Development Environment:
```bash
npm run test:dev
npm run test:ui:dev
```

- QA Environment:
```bash
npm run test:qa
npm run test:ui:qa
```

- Production Environment:
```bash
npm run test:prod
npm run test:ui:prod
```

## Environment Configuration

Each environment has its own configuration file in the `config` directory:
- `dev.config.js`: Development environment settings
- `qa.config.js`: QA environment settings
- `prod.config.js`: Production environment settings

Configuration includes:
- Base URL
- API URL
- Environment name
- Timeout settings

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

The project includes a GitHub Actions workflow that implements a sequential test execution strategy:

1. Development Environment Tests:
   - Runs first on every push or pull request
   - Must pass for QA tests to proceed

2. QA Environment Tests:
   - Runs only if Development tests pass
   - Must pass for Production tests to proceed

3. Production Environment Tests:
   - Runs only if QA tests pass
   - Final stage of the pipeline

The workflow includes for each environment:
- Node.js setup
- Dependency installation
- Playwright browser installation
- Test execution
- Report upload as artifacts (available for 30 days)

This sequential approach ensures that:
- QA tests only run if Development tests pass
- Production tests only run if QA tests pass
- Each environment's test results are tracked separately
- Failed tests in earlier environments prevent testing in subsequent environments

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