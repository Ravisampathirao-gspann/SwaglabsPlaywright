import { test, expect } from './pageFactory.js';

test('Verify backpack details and add to cart', async ({ page, productpage, cartpage }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await productpage.verifyBackpackDetails(expect);

  await productpage.addToCart();

  await cartpage.verifyItemInCart(expect);
});
