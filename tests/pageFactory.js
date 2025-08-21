import {test as base,expect} from '@playwright/test'
import { cartPage } from '../pages/cartPage'
import { loginPage } from '../pages/loginPage'

export const test=base.extend({
    loginpage:async ({page},use)=>{
        await use(new loginPage(page))
    },
    productpage:async ({page},use)=>{
        await use(new productPage(page))
    },
    cartpage:async ({page},use)=>{
        await use(new cartPage(page))
    },
    checkoutonepage:async ({page},use)=>{
        await use(new checkoutOnePage(page))
    },
    checkouttwopage:async ({page},use)=>{
        await use(new checkoutTwoPage(page))  
    },
    pageSetUp:async ({loginpage},use)=>{
        await loginpage.applaunching()
        await loginpage.loginToAccount("visual_user","secret_sauce")
        await loginpage.clickLogin()
        await use();
    },
    cartPageSetUp:async({cartpage},use)=>{
        await cartpage.selectItem()
        await cartpage.addingItemToCart()
        await use();
    },
    cartPageSetUpSecondItem:async({cartpage},use)=>{
        await cartpage.clickBackToProducts()
        await cartpage.selectTshirt()
        await cartpage.addingItemToCart()
        await use();
    }
})

export {expect}