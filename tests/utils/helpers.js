class Helpers {
    static async waitForTimeout(page, timeout) {
        await page.waitForTimeout(timeout);
    }

    static async takeScreenshot(page, name) {
        await page.screenshot({ path: `./screenshots/${name}.png` });
    }

    static generateRandomString(length) {
        return Math.random().toString(36).substring(2, length + 2);
    }
}

module.exports = Helpers; 