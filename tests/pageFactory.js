import {test as base,expect} from '@playwright/test'

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
})

export {expect}