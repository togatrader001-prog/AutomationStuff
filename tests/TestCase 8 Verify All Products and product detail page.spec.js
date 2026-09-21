// . Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

//@ts-check

import { test, expect } from "@playwright/test";

test("TestCase 8: Verify All Products and product detail page", async ({
	page,
}) => {
	// // Target the interstitial ad frame safely using .first()
	//     const adCloseButton = page
	//         .frameLocator('iframe[name^="aswift_"]').first()
	//         .frameLocator('iframe[name="ad_iframe"]')
	//         .locator('#dismiss-button');

	// await page.addLocatorHandler(adCloseButton, async () => {
	//     await adCloseButton.click();
	// });

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


    //click on first product
    await page.getByRole('link', { name: ' View Product' }).first().click();

    //verify visibility details
  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
  await page.getByText('Category: Women > Tops').click();
  await page.getByText('Rs.').click();
  await page.getByText('Availability:').click();
  await page.getByText('Condition:').click();
  await page.getByText('Brand:').click();


});
