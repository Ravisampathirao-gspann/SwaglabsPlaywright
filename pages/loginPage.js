export class loginPage{
    constructor(page){
    this.page = page
    this.userNameLoc = page.locator('[data-test="username"]')
    this.passwordLoc = page.locator('[data-test="password"]')
    this.loginBtnLoc = page.locator('[data-test="login-button"]')
    this.acceptedUsernamesHeadingLoc = page.locator("//h4[text()='Accepted usernames are:']")
    }
 
    async login(username,password){
       await this.page.goto('https://www.saucedemo.com/')
       await this.userNameLoc.fill(username)
       await this.passwordLoc.fill(password)
       await this.loginBtnLoc.click()

    }

    async isAcceptedUsernamesHeadingVisible(){
        return await this.acceptedUsernamesHeadingLoc.isVisible()
    }

}





