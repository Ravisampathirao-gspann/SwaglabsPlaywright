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

  async verifyBackpackDetails() {
    await expect(this.backpackImage).toBeVisible();
    await expect(this.backpackTitle).toBeVisible();
    await expect(this.backpackDescription).toBeVisible();
    await expect(this.backpackPrice).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
  }

  async addToCart() {
    await this.addToCartButton.click();
    await this.cartIcon.click();
  }
}

            

