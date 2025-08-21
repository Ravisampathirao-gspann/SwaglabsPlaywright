export class ProductPage {
  constructor(page) {
    this.page = page;
    this.backpackImage = page.locator('[data-test="item-4-img-link"]');
    this.backpackTitle = page.locator('[data-test="item-4-title-link"]');
    this.backpackDescription = page.getByText('carry.allTheThings() with the');
    this.backpackPrice = page.getByText('$29.99');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
  }

  async verifyBackpackImage() {
    
    return await this.backpackImage.isVisible()
  }
  async verifyBackpackTitle() {
    
    return await this.backpackTitle.isVisible()
  }
  async verifyBackpackDescription() {
    
    return await this.backpackDescription.isVisible()
  }
  async verifyBackpackPrice() {
    
    return await this.backpackPrice.isVisible()
    
  }
  async verifyAddToCartButton() {
    
    return await this.addToCartButton.isVisible()

  }



  async addToCart() {
    await this.addToCartButton.click();
    await this.cartIcon.click();
  }
}

            

