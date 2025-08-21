import { test, expect } from './pageFactory.js'
import { describe } from 'node:test';

test.describe('CartPage Tests @Anil', () => {

  test('Adding single product into the cart', async ({ pageSetUp, cartPageSetUp, cartpage }) => {
    await cartpage.openCart()
    await expect(cartpage.sauceLabsBackpackLoc).toBeVisible();
  });

  test('Adding multiple products into the cart', async ({ pageSetUp, cartPageSetUp, cartPageSetUpSecondItem, cartpage }) => {
    await cartpage.openCart()
    await expect(cartpage.cartQuantityLoc).toContainText('2');
  })

  test('Remove item from cart', async ({ pageSetUp, cartPageSetUp, cartpage ,page}) => {
    await cartpage.openCart()
    await cartpage.removeItemInCartPage()
    await page.waitForLoadState('domcontentloaded');
    await expect(cartpage.cartQuantityLoc).toHaveCount(0)
  })

  test('Moving from cartpage to homepage then cart count not changes', async ({ pageSetUp, cartPageSetUp, page, cartpage }) => {
    await page.waitForLoadState('domcontentloaded');
    await cartpage.goingBackToHomepage()
    await page.waitForLoadState('domcontentloaded');
    await expect(cartpage.cartQuantityLoc).toHaveCount(1)
  })

  test('After relogin the cart count should remain constant', async ({ pageSetUp, cartPageSetUp, cartpage, loginpage }) => {
    await cartpage.clickMenu()
    await cartpage.clickOnLogout()
    await loginpage.loginToAccount("visual_user", "secret_sauce")
    await expect(cartpage.cartQuantityLoc).toContainText('1')
  })

  test('Clicking add to cart when we are on home page', async ({ pageSetUp, page, cartpage }) => {
    await page.waitForLoadState('domcontentloaded');
    await cartpage.clickAddCartOnHomePage()
    await page.waitForLoadState('domcontentloaded');
    await expect(cartpage.cartQuantityLoc).toHaveCount(1)
  })

  test('Cart persistance on page refresh', async ({ pageSetUp, cartPageSetUp, cartPageSetUpSecondItem, page, cartpage }) => {
    await cartpage.openCart()
    await page.reload()
    await page.waitForLoadState("domcontentloaded");
    await expect(cartpage.cartQuantityLoc).toContainText('2')
  })

  test('Cart UI for Continue shopping', async ({ pageSetUp, page, cartpage, context }) => {
    await cartpage.openCart()
    await cartpage.clickContinueShopping()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  })
  test('Cart UI and Accessibility check for Twitter', async ({ pageSetUp, page, cartpage, context }) => {
    await cartpage.openCart()
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      await cartpage.clickTwitterOnFooter()
    ]);

    await newPage.waitForLoadState("domcontentloaded");
    await expect(newPage).toHaveURL("https://x.com/saucelabs");
    await newPage.close()
  })
  test('Cart UI and Accessibility check for linkedIn', async ({ pageSetUp, page, cartpage, context }) => {
    await cartpage.openCart()
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      await cartpage.clickLinkedInOnFooter()
    ]);

    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL("https://www.linkedin.com/company/sauce-labs/");
    await newPage.close()
  })
})