import { cartPage } from '../pages/cartPage.js';
import { loginPage } from '../pages/loginPage.js';
import { test, expect } from './pageFactory.js';

test('Verify backpack image @shagun', async ({ page, productpage, cartpage, loginpage }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(productpage.verifyBackpackImage()).toBeTruthy()

});

test('verify backpack title @shagun', async ({ page, productpage, cartpage, loginpage }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(productpage.verifyBackpackTitle()).toBeTruthy()
})

test('verify backpack Description @shagun', async ({ page, productpage, cartpage, loginpage }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(productpage.verifyBackpackDescription()).toBeTruthy()
})

test('verify backpack Price @shagun', async ({ page, productpage, cartpage, loginpage }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(productpage.verifyBackpackPrice()).toBeTruthy()
})

test('verify AddToCartButton @shagun', async ({ page, productpage, cartpage, loginpage }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(productpage.verifyAddToCartButton()).toBeTruthy()
})

test('Verify "Swag Labs" text is visible @shagun', async ({ page, productpage }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(productpage.verifySwagLabsText()).toBeTruthy();
});
test('Verify Inventory sidebar link is visible after opening menu @shagun', async ({ page, productpage, pageSetUp }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await productpage.openMenu();
  const isInventoryVisible = await productpage.verifyInventorySidebarLink();
  await expect(isInventoryVisible).toBeTruthy();
});

test('Verify About sidebar link is visible after opening menu @shagun', async ({ page, productpage, pageSetUp }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await productpage.openMenu();
  const isAboutVisible = await productpage.verifyAboutSidebarLink();
  await expect(isAboutVisible).toBeTruthy();
});

test('Verify Logout sidebar link is visible after opening menu @shagun', async ({ page, productpage, pageSetUp }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await productpage.openMenu();
  const isLogoutVisible = await productpage.verifyLogoutSidebarLink();
  await expect(isLogoutVisible).toBeTruthy();
});

test('Verify Reset sidebar link is visible after opening menu @shagun', async ({ page, productpage, pageSetUp }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await productpage.openMenu();
  const isResetVisible = await productpage.verifyResetSidebarLink();
  await page.waitForLoadState('domcontentloaded')
  await expect(isResetVisible).toBeTruthy();
});







