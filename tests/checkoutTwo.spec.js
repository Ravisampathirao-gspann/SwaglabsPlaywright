import { checkoutTwoPage } from '../pages/checkoutTwoPage'
import{test,expect} from './pageFactory.js'

test('checking the functionality of meanu iteam @ravi',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickMeanuBTN()
    await expect(page.getByText('All ItemsAboutLogoutReset App')).toBeVisible();
})
test("alliteam button @ravi ",async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickMeanuBTN()
    await checkouttwopage.ClickAllIteam()
    await page.waitForLoadState("domcontentloaded")
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
test("fuctionality of logoutBTN @ravi",async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await  checkouttwopage.ClickMeanuBTN()
    await checkouttwopage.ClickLogOut()
    await expect(page).toHaveURL('https://www.saucedemo.com/')
})
test('functionality of aboutbtn @ravi',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickMeanuBTN()
    await checkouttwopage.ClickAbout()
    await expect(page).toHaveURL('https://saucelabs.com/')
})
test('functionality of cancel btn @ravi',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickCancel()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
test('functionality of finish btn @ravi',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickFinish()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
})
test('functionality of cartIcon @ravi',async({pageSetUp,checkoutsetup,checkouttwopage,page})=>{
    await checkouttwopage.ClickCartIcon()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
})
test('functionality of backToHomeBTN @ravi',async({pageSetUp,checkoutsetup,checkouttwopage,checkoutfinal,checkoutsetupfinal,page})=>{
    await checkoutfinal.ClickBackHomeBtn()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
}) 

   
