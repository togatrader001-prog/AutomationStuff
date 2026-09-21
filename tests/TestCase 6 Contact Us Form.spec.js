// Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Contact Us' button
// 5. Verify 'GET IN TOUCH' is visible
// 6. Enter name, email, subject and message
// 7. Upload file
// 8. Click 'Submit' button
// 9. Click OK button
// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
// 11. Click 'Home' button and verify that landed to home page successfully

// @ts-check
import { test, expect } from "@playwright/test";
import path from "node:path";

test("TestCase 6: Contact Us Form", async ({ page }) => {
	// 1-2. Launch the browser and navigate to the home page.
	await page.goto("https://automationexercise.com/");

	// 3. Verify that the home page is visible successfully.
	await expect(
		page.getByRole("link", { name: "Website for automation" }),
	).toBeVisible();

	// 4. Click on Contact Us.
	await page.getByRole("link", { name: /Contact us/i }).click();

	// 5. Verify GET IN TOUCH is visible.
	await expect(
		page.getByRole("heading", { name: "Get In Touch" }),
	).toBeVisible();

	// 6. Enter the name, email, subject, and message.
	await page.locator('input[name="name"]').fill("Automation Test User");
	await page
		.locator('input[name="email"]')
		.fill(`automation-test-${Date.now()}@example.com`);
	await page.locator('input[name="subject"]').fill("Contact Us Test");
	await page
		.locator('textarea[name="message"]')
		.fill("This is an automated Contact Us form test.");

	// 7. Upload the requested file.
	await page
		.locator('input[name="upload_file"]')
		.setInputFiles(path.join(process.cwd(), "SomethingToSend.txt"));

	// 8-9. Submit the form and accept the confirmation dialog.
	page.once("dialog", async (dialog) => {
		await dialog.accept();
	});
	await page.getByRole("button", { name: "Submit" }).click();

	// 10. Verify the successful submission message.
	await expect(page.locator("#contact-page .status.alert-success")).toHaveText(
		"Success! Your details have been submitted successfully.",
		{ timeout: 15000 },
	);
	await expect(
		page.locator("#contact-page .status.alert-success"),
	).toBeVisible();

	// 11. Click Home and verify that the home page is loaded successfully.
	await page
		.locator("#contact-page")
		.getByRole("link", { name: "Home" })
		.click();
	await expect(page).toHaveURL("https://automationexercise.com/");
	await expect(
		page.getByRole("link", { name: "Website for automation" }),
	).toBeVisible();
});
