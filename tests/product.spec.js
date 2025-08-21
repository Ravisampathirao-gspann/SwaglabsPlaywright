import { cartPage } from '../pages/cartPage.js';
import { loginPage } from '../pages/loginPage.js';
import { test, expect } from './pageFactory.js';

test('Verify backpack image @shagun', async ({ page, productpage, cartpage, loginpage }) => {
await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(productpage.verifyBackpackImage()).toBeTruthy()

});

test('verify backpack title @shagun',async({page, productpage, cartpage, loginpage})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(productpage.verifyBackpackTitle()).toBeTruthy()
})

test('verify backpack Description @shagun',async({page, productpage, cartpage, loginpage})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(productpage.verifyBackpackDescription()).toBeTruthy()
})

test('verify backpack Price @shagun',async({page, productpage, cartpage, loginpage})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(productpage.verifyBackpackPrice()).toBeTruthy()
})

test('verify AddToCartButton @shagun',async({page, productpage, cartpage, loginpage})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(productpage.verifyAddToCartButton()).toBeTruthy()
})




