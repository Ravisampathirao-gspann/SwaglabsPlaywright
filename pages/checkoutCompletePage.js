export class checkoutCompletePage{
constructor(page){
    this.page=page
    this.cartIconLoc = page.locator(".shopping_cart_link")
    this.removeBtnLoc = page.locator("//button[text()='Remove']")
    this.hamburgerMenuIconLoc = page.locator("#react-burger-menu-btn")
    this.logoutLoc=page.locator("#logout_sidebar_link")
    this.aboutLoc=page.locator("#about_sidebar_link")
    this.afterOrderMsgLoc = page.locator("//h2[text()='Thank you for your order!']")
    this.allItemsLoc = page.locator("#inventory_sidebar_link")
    this.productHeadingLoc = page.locator("//span[text()='Products']")
    this.resetAppStateLoc = page.locator("#reset_sidebar_link")
}

async clickCartIcon(){
    await this.cartIconLoc.click()
}
async isRemoveBtnVisible(){
    return await this.removeBtnLoc.isVisible()
}
async clickLogout(){
    await this.hamburgerMenuIconLoc.click()
    await this.logoutLoc.click()
}
async clickAbout(){
    await this.hamburgerMenuIconLoc.click()
    await this.aboutLoc.click()
}
async clickAllItems(){
    await this.hamburgerMenuIconLoc.click()
    await this.allItemsLoc.click()
}
async isAfterOrderMsgHeadingVisible(){

    return await this.afterOrderMsgLoc.isVisible()
}
async clickResetAppState(){

    await this.hamburgerMenuIconLoc.click()
    await this.resetAppStateLoc.click()
}
async isProductHeadingVisible(){

    return await this.productHeadingLoc.isVisible()
}


}