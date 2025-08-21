import {test as base,expect} from '@playwright/test'
import { cartPage } from '../pages/cartPage';
import { checkoutOnePage } from '../pages/checkoutOnePage';
<<<<<<< HEAD
import {ProductPage} from '../pages/productPage'
import { checkoutTwoPage } from '../pages/checkoutTwoPage';
import { loginPage } from '../pages/loginPage';
=======
import { productPage } from '../pages/productPage';
import { checkoutTwoPage } from '../pages/checkoutTwoPage';
import { loginPage } from '../pages/loginPage';

>>>>>>> 6f25bbec33e1722b217617318e8e2444bb6ac2cf
export const test=base.extend({
    loginpage:async ({page},use)=>{
        await use(new loginPage(page))
    },
    productpage:async ({page},use)=>{
        await use(new ProductPage(page))import {test as base,expect} from '@playwright/test'
        import { cartPage } from '../pages/cartPage';
        import { checkoutOnePage } from '../pages/checkoutOnePage';
        import {ProductPage} from '../pages/productPage'
        import { checkoutTwoPage } from '../pages/checkoutTwoPage';
        import { loginPage } from '../pages/loginPage';
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
            pageSetUp:async ({loginpage},use)=>{
                await loginpage.applaunching()
                await loginpage.loginToAccount("visual_user","secret_sauce")
                await loginpage.clickLogin()
                await use();
            }
        })
        export {expect}
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