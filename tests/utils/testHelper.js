const fs = require('fs');
const path = require('path');

class TestHelper {
    static async takeScreenshot(page, testName) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotPath = path.join('screenshots', `${testName}-${timestamp}.png`);
        
        await fs.promises.mkdir('screenshots', { recursive: true });
        await page.screenshot({ path: screenshotPath, fullPage: true });
        return screenshotPath;
    }

    static async waitForNetworkIdle(page, timeout = 30000) {
        await page.waitForLoadState('networkidle', { timeout });
    }

    static async waitForSelectorAndClick(page, selector, timeout = 10000) {
        await page.waitForSelector(selector, { timeout });
        await page.click(selector);
    }

    static async waitForSelectorAndType(page, selector, text, timeout = 10000) {
        await page.waitForSelector(selector, { timeout });
        await page.fill(selector, text);
    }

    static async waitForSelectorAndGetText(page, selector, timeout = 10000) {
        await page.waitForSelector(selector, { timeout });
        return await page.textContent(selector);
    }

    static async waitForNavigation(page, timeout = 30000) {
        await page.waitForNavigation({ timeout });
    }

    static generateRandomString(length = 10) {
        return Math.random().toString(36).substring(2, length + 2);
    }

    static generateRandomEmail() {
        return `test-${this.generateRandomString()}@example.com`;
    }

    static async clearDirectory(directory) {
        if (fs.existsSync(directory)) {
            const files = await fs.promises.readdir(directory);
            for (const file of files) {
                await fs.promises.unlink(path.join(directory, file));
            }
        }
    }
}

module.exports = TestHelper; 