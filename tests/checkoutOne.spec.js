// import { test, expect } from './pageFactory.js'

// test('test without filling firstname', async ({ page,checkoutonepage }) => {
//   await page.goto('https://www.saucedemo.com/');
  
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();


//   await checkoutonepage.enterFirstName("John")
//   await checkoutonepage.enterPostalCode("12345")
//   await checkoutonepage.clickContinue()
//   await expect(checkoutonepage.isFirstNameErrorMsgVisible()).toBeTruthy()
// })

// test('test without filling lastname', async ({ page,checkoutonepage }) => {
//   await page.goto('https://www.saucedemo.com/');
  
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();


//   await checkoutonepage.enterLastName("Pathak")
//   await checkoutonepage.enterPostalCode("12345")
//   await checkoutonepage.clickContinue()
//   await expect(checkoutonepage.isLastNameErrorMsgVisible()).toBeTruthy()
// })



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

   test('Verify successful checkout with valid details', async ({ checkoutonepage }) => {
    await checkoutonepage.enterFirstName("John");
    await checkoutonepage.enterLastName("Pathak");
    await checkoutonepage.enterPostalCode("12345");
    await checkoutonepage.clickContinue();
    // await expect(checkoutonepage).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
    await expect(checkoutonepage.page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
  });

  test('Verifying that Cancel returns to cart from Checkout One', async ({ checkoutonepage }) => {
    
    await checkoutonepage.clickCancelBtn();
    await expect(checkoutonepage.page).toHaveURL("https://www.saucedemo.com/cart.html");
  });

  test('Verifying that Cart icon returns to cart page from Checkout One', async ({ checkoutonepage }) => {
    
    await checkoutonepage.clickCartIcon();
    await expect(checkoutonepage.page).toHaveURL("https://www.saucedemo.com/cart.html");
  });


});
