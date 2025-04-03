const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('https://practicetestautomation.com/practice-test-login/');
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.login('student', 'Password123');
        expect(await loginPage.isLoggedIn()).toBeTruthy();
    });

    test('should show error with invalid credentials', async () => {
        await loginPage.login('invalid', 'wrong');
        expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    });
}); 