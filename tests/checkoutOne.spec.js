import { test, expect } from './pageFactory.js';

test.describe('Checkout1 page form validation', () => {
  test.beforeEach(async ({ page,loginpage }) => {
    await loginpage.login("standard_user","secret_sauce")
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
  });

  test('should show error when first name is missing', async ({ checkoutonepage }) => {
    await checkoutonepage.enterLastName("Pathak");
    await checkoutonepage.enterPostalCode("12345");
    await checkoutonepage.clickContinue();
    await expect(checkoutonepage.isFirstNameErrorMsgVisible()).toBeTruthy();
  });

  test('should show error when last name is missing', async ({ checkoutonepage }) => {
    await checkoutonepage.enterFirstName("John");
    await checkoutonepage.enterPostalCode("12345");
    await checkoutonepage.clickContinue();
    await expect(checkoutonepage.isLastNameErrorMsgVisible()).toBeTruthy();
  });

  test('should show error when postal code is missing', async ({ checkoutonepage }) => {
    await checkoutonepage.enterFirstName("John");
    await checkoutonepage.enterLastName("Pathak");
    await checkoutonepage.clickContinue();
    await expect(checkoutonepage.isPostalCodeErrorMsgVisible()).toBeTruthy();
  });
});