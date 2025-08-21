export class checkoutCompletePage{
constructor(page){
    this.page=page
    this.cartIconLoc = page.locator(".shopping_cart_link")
}

async clickCartIcon(){
    await this.cartIconLoc.click()
}
}