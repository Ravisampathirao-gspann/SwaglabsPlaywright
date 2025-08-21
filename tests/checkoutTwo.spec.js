import { checkoutTwoPage } from '../pages/checkoutTwoPage'
import{test,expect} from './pageFactory.js'

test('checking the functionality of meanu iteam',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickMeanuBTN()
    await expect(page.getByText('All ItemsAboutLogoutReset App')).toBeVisible();
})
test("alliteam button",async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickMeanuBTN()
    await checkouttwopage.ClickAllIteam()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
test("fuctionality of logoutBTN",async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await  checkouttwopage.ClickMeanuBTN()
    await checkouttwopage.ClickLogOut()
    await expect(page).toHaveURL('https://www.saucedemo.com/')
})
test('functionality of aboutbtn',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickMeanuBTN()
    await checkouttwopage.ClickAbout()
    await expect(page).toHaveURL('https://saucelabs.com/')
})
test('functionality of cancel btn',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickCancel()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
test('functionality of finish btn',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickFinish()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
})
test('functionality of cartIcon',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickCartIcon()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
})
test('functionality of backToHomeBTN',async({pageSetUp,checkoutsetup,checkouttwopage,checkoutfinal,checkoutsetupfinal,page})=>{
    await checkoutfinal.ClickBackHomeBtn()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
}) 

   
