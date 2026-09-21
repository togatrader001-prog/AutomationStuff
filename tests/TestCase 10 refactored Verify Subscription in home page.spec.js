// Test Case 10: Verify Subscription in home page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down to footer
// 5. Verify text 'SUBSCRIPTION'
// 6. Enter email address in input and click arrow button
// 7. Verify success message 'You have been successfully subscribed!' is visible

//@ts-check

import { test, expect } from 'playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('TestCase 10 refactored: Verify Subscription in home page ', async ({ page }) => {
	//turn off ad blocker
	await page.route('**/*{googleads,doubleclick,adservice}*', (route) => route.abort());

	//instantiate the HomePage
	const homePage = new HomePage(page);

	// 1. Navigate and verify home page
	await homePage.navigate();
	await expect(homePage.homeLogo).toBeVisible();

	// 2. verify footer subscription is visible
	await expect(homePage.subscriptionHeader).toBeVisible();

	// 3. enter email address and click subscribe button
	const email = 'Testemail123@gmail.com';
	await homePage.submitSubscription(email);
	await expect(homePage.subscriptionSuccessMessage).toBeVisible();
});
