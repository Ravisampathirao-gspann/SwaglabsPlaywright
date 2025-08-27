export class checkoutOnePage {
    constructor(page) {
        this.page = page
        this.firstNameLoc = page.locator('[data-test="firstName"]')
        this.lastNameLoc = page.locator('[data-test="lastName"]')
        this.postalCodeLoc = page.locator('[data-test="postalCode"]')
        this.continueBtn = page.locator('[data-test="continue"]')
        this.firstNameErrorLoc = page.locator("//h3[text()='Error: First Name is required']")
        this.lastNameErrorLoc = page.locator("//h3[text()='Error: Last Name is required']")
        this.postalCodeErrorLoc = page.locator("//h3[text()='Error: Postal Code is required']")
        this.cancelBtnLoc = page.locator("#cancel")
        this.cartIconLoc = page.locator(".shopping_cart_link")


        this.shoppingCartLoc = page.locator('[data-test="shopping-cart-link"]')
        this.checkoutBtnLoc = page.locator('[data-test="checkout"]')
    }

    async enterFirstName(firstName) {

        await this.firstNameLoc.fill(firstName)
    }
    async enterLastName(lastName) {

        await this.lastNameLoc.fill(lastName)
    }
    async enterPostalCode(postalCode) {

        await this.postalCodeLoc.fill(postalCode)
    }
    async clickContinue() {
        await this.continueBtn.click()
    }
    async isFirstNameErrorMsgVisible() {

        return await this.firstNameErrorLoc.isVisible()
    }
    async isLastNameErrorMsgVisible() {

        return await this.lastNameErrorLoc.isVisible()
    }
    async isPostalCodeErrorMsgVisible() {

        return await this.postalCodeErrorLoc.isVisible()
    }
    async clickCancelBtn() {
        await this.cancelBtnLoc.click()
    }
    async clickCartIcon() {
        await this.cartIconLoc.click()
    }
    async clickShoppingCart() {
        await this.shoppingCartLoc.click()
    }
    async clickCheckout() {
        await this.checkoutBtnLoc.click()
    }
    async isCartEmpty(){

       return await this.cartIconLoc.textContent()==''
    }


}