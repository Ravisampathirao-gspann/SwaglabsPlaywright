import {test as base,expect} from '@playwright/test'
import { cartPage } from '../pages/cartPage';
import { checkoutOnePage } from '../pages/checkoutOnePage';
import { productPage } from '../pages/productPage';
import { checkoutTwoPage } from '../pages/checkoutTwoPage';
import { loginPage } from '../pages/loginPage';

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
        
        await loginpage.login("visual_user","secret_sauce")
        await use();
    }
})

export {expect}