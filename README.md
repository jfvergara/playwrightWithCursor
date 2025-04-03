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
npx playwright test
```

- Run tests in UI mode:
```bash
npx playwright test --ui
```

- Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

- Run tests in debug mode:
```bash
npx playwright test --debug
```

## Page Object Model

This project uses the Page Object Model design pattern to organize test code. Each page in the application has its own class that extends the `BasePage` class. This approach provides:

- Better code organization
- Reusability of page elements and actions
- Easier maintenance
- Reduced code duplication

## GitHub Actions

The project includes a GitHub Actions workflow that runs tests on pull requests and pushes to the main branch. The workflow is defined in `.github/workflows/playwright.yml`. 