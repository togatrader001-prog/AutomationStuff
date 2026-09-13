/*
. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

*/


//@ts-check

import { test, expect } from "@playwright/test";

test('Verify Incorrect Login Info', async ({ page }) => {
  // Implementation for Test Case 3


await page.goto('http://automationexercise.com');

await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible(); //verify homepage is visible

await page.getByRole('link', { name: 'Signup / Login' }).click(); //click on 'Signup / Login' button


await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible(); //verify 'Login to your account' is visible

await page.getByRole('textbox', { name: 'Email Address' }).first().fill('invalid_email@example.com');
await page.getByRole('textbox', { name: 'Password' }).first().fill('invalid_password');



await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Your email or password is incorrect!')).toBeVisible(); //verify error message is visible





});