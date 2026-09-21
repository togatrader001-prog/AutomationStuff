// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

//@ts-check
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";

test("TestCase 7 refactored: Verify Test Cases Page", async ({ page }) => {
	const homePage = new HomePage(page);

	//go to the site and make sure it loaded
	await homePage.navigate();

	//open the test cases button
	await homePage.openTestCases();

	//verify the test cases page is loaded
	await expect(page).toHaveURL("https://automationexercise.com/test_cases");
	await expect(homePage.testCasesHeader).toBeVisible();
});
