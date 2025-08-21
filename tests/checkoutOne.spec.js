
import { test, expect } from './pageFactory.js';


test.describe('Checkout1 page testing', () => {
  test.beforeEach(async ({ page,pageSetUp }) => {
    // await loginpage.login("standard_user","secret_sauce")
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

test.describe('CheckoutComplete page testing', () => {

    test.beforeEach(async ({ page,pageSetUp,checkouttwopage,checkoutonepage }) => {
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await checkoutonepage.enterFirstName("abcd")
        await checkoutonepage.enterLastName("efgh")
        await checkoutonepage.enterPostalCode("12345")
        await checkoutonepage.clickContinue()
        await checkouttwopage.ClickFinish()
  });

    test("Verify cart is empty after successful checkout",async ({checkoutcompletepage})=>{

        checkoutcompletepage.clickCartIcon()
        await expect(checkoutcompletepage.isRemoveBtnVisible()).toBeTruthy()
    })

    test("Logout from Checkout Complete page",async ({loginpage,checkoutcompletepage})=>{

        await checkoutcompletepage.clickLogout()
        await expect(loginpage.isAcceptedUsernamesHeadingVisible()).toBeTruthy()
    })

    test("About page navigation from Checkout Complete",async ({checkoutcompletepage})=>{
        await checkoutcompletepage.clickAbout()
        await expect(checkoutcompletepage.page).toHaveURL("https://saucelabs.com/")
    })

    test("Verify order completion message display",async ({checkoutcompletepage})=>{

        await expect(checkoutcompletepage.isAfterOrderMsgHeadingVisible()).toBeTruthy()
    })
    
});
