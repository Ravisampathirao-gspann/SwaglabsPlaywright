export class checkoutOnePage{
constructor(page){
    this.page=page
    this.firstNameLoc=page.locator('[data-test="firstName"]')
    this.lastNameLoc=page.locator('[data-test="lastName"]')
    this.postalCodeLoc=page.locator('[data-test="postalCode"]')
    this.continueBtn=page.locator('[data-test="continue"]')
    this.firstNameErrorLoc=page.locator('[data-test="continue"]')
}

async enterFirstName(firstName){

    await this.firstNameLoc.fill(firstName)
}
async enterLastName(lastName){

    await this.lastNameLoc.fill(lastName)
}
async enterPostalCode(postalCode){

    await this.postalCodeLoc.fill(postalCode)
}
async clickContinue(){
    await this.continueBtn.click()
}
async isfirstNameErrorMsgVisible(){

    return await this.firstNameErrorLoc.isVisible()
}


}