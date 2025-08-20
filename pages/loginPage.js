export class loginPage {
    constructor(page) {
        this.page = page
        this.userNameLoc = page.locator("#user-name")
        this.passwordLoc = page.locator("#password")
        this.loginBtnLoc = page.locator("#login-button")
    }

    async applaunching() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async loginToAccount(username, password) {
        await this.userNameLoc.fill(username);
        await this.passwordLoc.fill(password);
    }
    async clickLogin() {
        await this.loginBtnLoc.click();
    }
}