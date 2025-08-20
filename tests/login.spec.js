import { test, expect } from './pageFactory.js'

test('login test', async ({loginpage,page})=>{
    await loginpage.login('standard_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

test('login test 2', async ({loginpage,page})=>{
    await loginpage.login('problem_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

test('login test 3', async ({loginpage,page})=>{
    await loginpage.login('performance_glitch_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

