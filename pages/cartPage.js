export class cartPage{
    constructor(page){
        this.sauceLabsBackpackLoc=page.locator("#item_4_title_link")
        this.addToCartLoc=page.locator("#add-to-cart")
        this.clickCartIconLoc=page.locator(".shopping_cart_link")
        this.backToProductsLoc=page.locator("#back-to-products")
        this.continueShoppingLoc=page.locator("#continue-shopping")
        this.sauceLabsTshirtLoc=page.locator("#item_1_title_link")
        this.cartQuantityLoc=page.locator(".shopping_cart_badge")
        this.cartCountLoc=page.locator(".shopping_cart_link")
        this.removeItemHomepageLoc=page.locator("#remove-sauce-labs-backpack")
        this.removeItemFromCartLoc=page.locator("#remove")
        this.backToProductsLoc=page.locator("#back-to-products")
        this.menuLoc=page.locator("#react-burger-menu-btn")
        this.logOutBthLoc=page.locator("#logout_sidebar_link")
        this.sauceBackpackHomepageLoc=page.locator("#add-to-cart-sauce-labs-backpack")
        this.twitterLoc=page.locator("//a[contains(text(),'Twitter')]")
        this.linkedInLoc=page.locator("//a[contains(text(),'LinkedIn')]")
    }
    async selectItem(){
        await this.sauceLabsBackpackLoc.click();
    }
  
    async addingItemToCart(){
        await this.addToCartLoc.click();
    }
    async openCart(){
        await this.clickCartIconLoc.click();
    }
    async clickBackToProducts(){
        await this.backToProductsLoc.click();
    }

    async selectTshirt(){
        await this.sauceLabsTshirtLoc.click();
    }

    async removeItemInCartPage(){
        await this.removeItemHomepageLoc.click()
    }

    async goingBackToHomepage(){
        await this.backToProductsLoc.click()
    }

    async clickContinueShopping(){
        await this.continueShoppingLoc.click()
    }

    async clickMenu(){
        await this.menuLoc.click()
    }

    async clickOnLogout(){
        await this.logOutBthLoc.click()
    }

    async clickAddCartOnHomePage(){
        await this.sauceBackpackHomepageLoc.click()
    }

    async clickTwitterOnFooter(){
        await this.twitterLoc.click()
    }

    async clickLinkedInOnFooter(){
        await this.linkedInLoc.click()
    }
}