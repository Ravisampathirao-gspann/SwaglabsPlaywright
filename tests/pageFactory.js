import {test as base,expect} from '@playwright/test'
import { cartPage } from '../pages/cartPage';
import { checkoutOnePage } from '../pages/checkoutOnePage';
import {ProductPage} from '../pages/productPage'
import { checkoutTwoPage } from '../pages/checkoutTwoPage';
import { loginPage } from '../pages/loginPage';
import { checkoutCompletePage } from '../pages/checkoutCompletePage';

export const test=base.extend({
    loginpage:async ({page},use)=>{
        await use(new loginPage(page))
    },
    productpage:async ({page},use)=>{
        await use(new ProductPage(page))
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
    checkoutcompletepage:async ({page},use)=>{
        await use(new checkoutCompletePage(page))  
    },
    checkoutfinal:async({page},use)=>{
        await use(new checkoutTwoPage(page))
    },
    pageSetUp:async ({loginpage},use)=>{
        await loginpage.login("visual_user","secret_sauce")
        await use();
    },
    checkoutsetup: async({checkouttwopage},use)=>{
        await checkouttwopage.ClickCartIcon()
        await checkouttwopage.ClickCheckoutBTN()
        await checkouttwopage.EntringDetails('Ram','Ravi','3456')
        await checkouttwopage.ClickContinueBTN()
        await use();
    },
    checkoutsetupfinal: async({checkoutfinal},use)=>{
        await checkoutfinal.ClickFinish()
        await use();
    }
})
 
export {expect}