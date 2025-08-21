export class ProductPage {
  constructor(page) {
    this.page = page;
    this.backpackImage = page.locator('[data-test="item-4-img-link"]');
    this.backpackTitle = page.locator('[data-test="item-4-title-link"]');
    this.backpackDescription = page.getByText('carry.allTheThings() with the');
    this.backpackPrice = page.getByText('$29.99');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');

    this.swagLabsText = page.getByText('Swag Labs');
    this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
    this.inventorySidebarLink = page.locator('[data-test="inventory-sidebar-link"]');
    this.aboutSidebarLink = page.locator('[data-test="about-sidebar-link"]');
    this.logoutSidebarLink = page.locator('[data-test="logout-sidebar-link"]');
    this.resetSidebarLink = page.locator('[data-test="reset-sidebar-link"]');
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

  async verifySwagLabsText() {
    return await this.swagLabsText.isVisible();
  }

  async openMenu() {
    await this.openMenuButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.openMenuButton.click();
  }

  async verifyInventorySidebarLink() {
    return await this.inventorySidebarLink.isVisible();
  }

  async verifyAboutSidebarLink() {
    return await this.aboutSidebarLink.isVisible();
  }

  async verifyLogoutSidebarLink() {
    return await this.logoutSidebarLink.isVisible();
  }

  async verifyResetSidebarLink() {
    return await this.resetSidebarLink.isVisible();
  }
}





