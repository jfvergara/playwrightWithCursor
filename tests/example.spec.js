// @ts-check
import { test, expect } from '@playwright/test';
import devConfig from '../config/dev.config';
import qaConfig from '../config/qa.config';
import prodConfig from '../config/prod.config';

// Get environment from process.env or default to dev
const env = process.env.ENV || 'dev';
const configs = {
    dev: devConfig,
    qa: qaConfig,
    prod: prodConfig
};
const currentConfig = configs[env];

test('has title', async ({ page }) => {
  await page.goto(currentConfig.baseUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto(currentConfig.baseUrl);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
