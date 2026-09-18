// Test Case 9: Search Product
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. Enter product name in search input and click search button
// 7. Verify 'SEARCHED PRODUCTS' is visible
// 8. Verify all the products related to search are visible

//@ts-check

import { test, expect } from "playwright/test";

test("TestCase 9 Searching for Product ", async ({ page }) => {
	//begin
	await page.goto("https://automationexercise.com/");

	//verify homepage is visible
	await expect(
		page.getByRole("link", { name: "Website for automation" }),
	).toBeVisible();

	//click on "products" button
	await page.getByRole("link", { name: " Products" }).click();

	//verify we are at "all products" page

	await expect(
		page.getByRole("heading", { name: "All Products" }),
	).toBeVisible();

	// search box field
	await page
		.getByRole("textbox", { name: "Search Product" })
		.fill("Men Tshirt");
	await expect(
		page.getByRole("textbox", { name: "Search Product" }),
	).toHaveValue("Men Tshirt");

	await page.locator("#submit_search").click();

	//verify searched products are there

	await expect(
		page.getByRole("heading", { name: "Searched Products" }),
	).toBeVisible();
	await expect(page.getByText("Men Tshirt").nth(1)).toBeVisible();
	//  for fun we are also verifying that there is a wrapper there
	await expect(page.locator(".product-image-wrapper").first()).toBeVisible();
});
