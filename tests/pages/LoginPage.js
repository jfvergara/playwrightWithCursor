const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#submit');
        this.successMessage = page.locator('h1.post-title');
        this.errorMessage = page.locator('#error');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.waitForPageLoad();
    }

    async isLoggedIn() {
        return await this.successMessage.isVisible();
    }

    async isErrorMessageVisible() {
        return await this.errorMessage.isVisible();
    }
}

module.exports = LoginPage; 