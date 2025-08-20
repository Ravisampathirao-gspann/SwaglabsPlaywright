import { test, expect } from './pageFactory.js'

test('test', async ({ checkoutonepage }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();


  await checkoutonepage.enterLastName("Pathak")
  await checkoutonepage.enterPostalCode("12345")
  await checkoutonepage.clickContinue()
  await expect(checkoutonepage.isfirstNameErrorMsgVisible).toBeTruthy()
})