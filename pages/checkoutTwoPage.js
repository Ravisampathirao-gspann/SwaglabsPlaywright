export class checkoutTwoPage{
     constructor(page){
        this.page =page;
        this.CartIcon =  page.locator('[data-test="shopping-cart-link"]')
        this.CheckOutbtn =  page.locator('[data-test="checkout"]')
        this.FirstName =  page.locator('#first-name')
        this.LastName = page.locator('#last-name')
        this.PostalCode = page.locator('#postal-code')
        this.Continuebtn =  page.locator('[data-test="continue"]')
        this.finishButton = page.locator("#finish");
        this.cancelButton = page.locator("#cancel");
        this.cartIcon2 = page.locator(".shopping_cart_link");
        this.menubutton = page.locator("#react-burger-menu-btn");
        this. allItems = page.locator("#inventory_sidebar_link");
        this. About = page.locator("#about_sidebar_link");
        this. logoutbtn = page.locator("#logout_sidebar_link");
        this.ResetAppState = page.locator("#reset_sidebar_link");
        this. BackTohomeBTN = page.locator("#back-to-products")
   
     }
     
async ClickCartIcon(){
    await this.CartIcon.click()
}
async ClickCheckoutBTN(){
    await this.CheckOutbtn.click()
}
async EntringDetails(fName,LName,PCode){
   
    await this.FirstName.fill(fName)
    await this.LastName.fill(LName)
    await this.PostalCode.fill(PCode)
}
async ClickContinueBTN(){
    await this.Continuebtn.click()
}
async ClickMeanuBTN(){
    await this.menubutton.click()
}
async ClickAllIteam(){
    await this.allItems.click()
}
async ClickAbout(){
    await this.About.click()
}
async ClickLogOut(){
    await this.logoutbtn.click()
}
async ClickReset(){
    await this.ResetAppState.click()
}
async ClickCancel(){
    await this.cancelButton.click()
}
async ClickFinish(){
    await this.finishButton.click()
}
async ClickBackHomeBtn(){
    await this.BackTohomeBTN.click()
}
 
}