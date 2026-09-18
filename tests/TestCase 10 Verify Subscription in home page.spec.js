// Test Case 10: Verify Subscription in home page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down to footer
// 5. Verify text 'SUBSCRIPTION'
// 6. Enter email address in input and click arrow button
// 7. Verify success message 'You have been successfully subscribed!' is visible

//@ts-check

import { test, expect } from "playwright/test";

test("TestCase 10 Verify Subscription in home page ", async ({ page }) => {
    //begin
    await page.goto("https://automationexercise.com/");

    //verify homepage is visible
    await expect(
        page.getByRole("link", { name: "Website for automation" }),
    ).toBeVisible();

   await expect(page.getByRole("link", { name: "Website for automation"})).toBeVisible();


await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Your email address' }).fill('Testemail123@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Your email address' })).toHaveValue('Testemail123@gmail.com');
  await page.locator('#subscribe').click();
    //await expect(page.getByText('You have been successfully')).toBeVisible();

await expect(
  page.getByText('You have been successfully subscribed!', { exact: true })
).toBeVisible();


});
