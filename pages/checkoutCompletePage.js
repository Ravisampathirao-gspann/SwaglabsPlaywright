export class checkoutCompletePage{
constructor(page){
    this.page=page
    this.cartIconLoc = page.locator(".shopping_cart_link")
    this.removeBtnLoc = page.locator("#remove-sauce-labs-backpack")
    this.hamburgerMenuIconLoc = page.locator("#react-burger-menu-btn")
    this.logoutLoc=page.locator("#logout_sidebar_link")
    this.aboutLoc=page.locator("#about_sidebar_link")
    this.afterOrderMsgLoc = page.locator("//h2[text()='Thank you for your order!']")
}

async clickCartIcon(){
    await this.cartIconLoc.click()
}
async isRemoveBtnVisible(){
    await this.removeBtnLoc.isVisible()
}
async clickLogout(){
    await this.hamburgerMenuIconLoc.click()
    await this.logoutLoc.click()
}
async clickAbout(){
    await this.hamburgerMenuIconLoc.click()
    await this.aboutLoc.click()
}
async isAfterOrderMsgHeadingVisible(){

    await this.afterOrderMsgLoc.isVisible()
}

}