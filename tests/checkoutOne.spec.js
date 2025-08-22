
import { test, expect } from './pageFactory.js';


test.describe('Checkout1 page testing @Karan', () => {
  test.beforeEach(async ({ page,pageSetUp }) => {
    // await loginpage.login("standard_user","secret_sauce")
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
  });

  test('should show error when first name is missing @Karan', async ({ checkoutonepage }) => {
    await checkoutonepage.enterLastName("Pathak");
    await checkoutonepage.enterPostalCode("12345");
    await checkoutonepage.clickContinue();
    await expect(checkoutonepage.isFirstNameErrorMsgVisible()).toBeTruthy();
  });

  test('should show error when last name is missing @Karan', async ({ checkoutonepage }) => {
    await checkoutonepage.enterFirstName("John");
    await checkoutonepage.enterPostalCode("12345");
    await checkoutonepage.clickContinue();
    await expect(checkoutonepage.isLastNameErrorMsgVisible()).toBeTruthy();
  });

  test('should show error when postal code is missing @Karan', async ({ checkoutonepage }) => {
    await checkoutonepage.enterFirstName("John");
    await checkoutonepage.enterLastName("Pathak");
    await checkoutonepage.clickContinue();
    await expect(checkoutonepage.isPostalCodeErrorMsgVisible()).toBeTruthy();
  });

   test('Verify successful checkout with valid details @Karan', async ({ checkoutonepage }) => {
    await checkoutonepage.enterFirstName("John");
    await checkoutonepage.enterLastName("Pathak");
    await checkoutonepage.enterPostalCode("12345");
    await checkoutonepage.clickContinue();
    // await expect(checkoutonepage).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
    await expect(checkoutonepage.page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
  });

  test('Verifying that Cancel returns to cart from Checkout One @Karan', async ({ checkoutonepage }) => {
    
    await checkoutonepage.clickCancelBtn();
    await expect(checkoutonepage.page).toHaveURL("https://www.saucedemo.com/cart.html");
  });

  test('Verifying that Cart icon returns to cart page from Checkout One @Karan', async ({ checkoutonepage }) => {
    
    await checkoutonepage.clickCartIcon();
    await expect(checkoutonepage.page).toHaveURL("https://www.saucedemo.com/cart.html");
  });


});

test.describe('CheckoutComplete page testing @Karan', () => {

    test.beforeEach(async ({ page,pageSetUp,checkouttwopage,checkoutonepage }) => {
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await checkoutonepage.enterFirstName("abcd")
        await checkoutonepage.enterLastName("efgh")
        await checkoutonepage.enterPostalCode("12345")
        await checkoutonepage.clickContinue()
        await checkouttwopage.ClickFinish()
  });

    test("Verify cart is empty after successful checkout @Karan",async ({checkoutcompletepage})=>{

        await checkoutcompletepage.clickCartIcon()
        const isVisible = await checkoutcompletepage.isRemoveBtnVisible();
        expect(isVisible).toBeFalsy();

        // await expect(checkoutcompletepage.isRemoveBtnVisible()).toBeFalsy()
    })

    test("Logout from Checkout Complete page @Karan",async ({loginpage,checkoutcompletepage})=>{

        await checkoutcompletepage.clickLogout()
        await expect(loginpage.isAcceptedUsernamesHeadingVisible()).toBeTruthy()
    })

    test("About page navigation from Checkout Complete @Karan",async ({checkoutcompletepage})=>{
        await checkoutcompletepage.clickAbout()
        await expect(checkoutcompletepage.page).toHaveURL("https://saucelabs.com/")
    })

    test("Verify order completion message display @Karan",async ({checkoutcompletepage})=>{

        await expect(checkoutcompletepage.isAfterOrderMsgHeadingVisible()).toBeTruthy()
    })
    test("Menu navigation to All Items from Checkout Two @Karan",async ({checkoutcompletepage})=>{
        await checkoutcompletepage.clickAllItems()
        await expect(checkoutcompletepage.isProductHeadingVisible()).toBeTruthy()
    })
    test("Navigation to Reset App State from Checkout Two page @Karan",async ({checkoutcompletepage})=>{

        const previousUrl = checkoutcompletepage.page.url();

        try{
         await Promise.all([
         checkoutcompletepage.page.waitForNavigation({ timeout: 3000 }),
         checkoutcompletepage.clickResetAppState()
        ]);
        
         const newUrl = checkoutcompletepage.page.url();
         expect(newUrl).not.toBe(previousUrl);
        }
    
        catch (error) {
        throw new Error();
        }
    })
});
