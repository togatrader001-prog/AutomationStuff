
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

//@ts-check

import { test, expect } from "@playwright/test";

test("TestCase 7: Verify Test Cases Page", async ({ page }) => {
    //begin
    await page.goto("https://automationexercise.com/");

    //verify homepage is visible
    await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible(); 

    //click on 'Test Cases' button
  await page.getByRole('link', { name: ' Test Cases' }).click();

    //verify user is navigated to test cases page successfully
    // await expect(page).toHaveURL("https://automationexercise.com/test_cases");

      await expect(page.getByRole('heading', { name: 'Test Cases', exact: true })).toBeVisible();
});
  






