import { test, expect } from './pageFactory.js'

test('Login with standard_user and valid password - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('standard_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

test('Login with problem_user and valid password - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('problem_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

test('Login with performance_glitch_user and valid password - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('performance_glitch_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

test('Login with error_user and valid password - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('error_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

test('Login with visual_user and valid password - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('visual_user','secret_sauce')
    await expect(page.locator('[data-test="title"]')).toBeVisible();
})

test('Login fails with invalid username - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('wrong_user','secret_sauce')
    await expect(page.locator('[data-test="error"]')).toBeVisible();
})

test('Login fails with invalid password - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('standard_user','wrong_password')
    await expect(page.locator('[data-test="error"]')).toBeVisible();
})

test('Login fails with locked out user - @Pranshu', async ({loginpage,page})=>{
    await loginpage.login('locked_out_user','secret_sauce')
    await expect(page.locator('[data-test="error"]')).toBeVisible();
})