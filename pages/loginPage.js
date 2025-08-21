export class loginPage{
    constructor(page){
    this.page = page
    this.userNameLoc = page.locator('[data-test="username"]')
    this.passwordLoc = page.locator('[data-test="password"]')
    this.loginBtnLoc = page.locator('[data-test="login-button"]')
    }
<<<<<<< HEAD
 
=======

>>>>>>> 6f25bbec33e1722b217617318e8e2444bb6ac2cf
    async login(username,password){
       await this.page.goto('https://www.saucedemo.com/')
       await this.userNameLoc.fill(username)
       await this.passwordLoc.fill(password)
       await this.loginBtnLoc.click()
<<<<<<< HEAD
   
 
=======
    

>>>>>>> 6f25bbec33e1722b217617318e8e2444bb6ac2cf
}}