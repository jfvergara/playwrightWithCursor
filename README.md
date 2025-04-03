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

The project includes a GitHub Actions workflow that:
1. Runs tests on pull requests and pushes to main/master branch
2. Tests all environments (dev, qa, prod) in parallel
3. Generates HTML test reports for each environment
4. Uploads test reports as artifacts (available for 30 days)

The workflow is defined in `.github/workflows/playwright.yml` and includes:
- Node.js setup
- Dependency installation
- Playwright browser installation
- Test execution for each environment
- Report upload for each environment

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