//  Launch browser
// 2. Navigate to url 'http://automationexercise.com
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

test("TestCase 6: Contact Us Form", async ({ page }) => {
	const testEmail = `smellyjapanesegirl${Date.now()}@gmail.com`;


	//begin
	await page.goto("https://automationexercise.com/");

	await expect(
		page.getByRole("link", { name: "Website for automation" }),
	).toBeVisible(); //verify homepage is visible

	// Click on 'Contact Us' button
	await page.getByRole("link", { name: " Contact us" }).click();

	//enter name, email, subject and message
	await page.getByRole("textbox", { name: "Name" }).fill("SmellyJapaneseGirl");
	await page
		.getByRole("textbox", { name: "Email", exact: true })
		.fill(testEmail);
	await page
		.getByRole("textbox", { name: "Subject" })
		.fill("Donkeys shouldn't sleep with our women");
	await page
		.getByRole("textbox", { name: "Your Message Here" })
		.fill("I mean how does that even work anyway?");

	//click upload file button and upload a file

	await page
		.locator('input[name="upload_file"]')
		.setInputFiles(
			"C:\\Users\\eugen\\OneDrive\\Desktop\\Learn to Code\\Project 1\\AutomationStuff\\SomethingToSend.txt",
		);

	//click submit button
	//set up listener for dialog and accept it
	page.on("dialog", (dialog) => dialog.accept());
	await page.getByRole("button", { name: "Submit" }).click();

    //verify success message is visible

    await expect(page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible({timeout: 8000});
//await expect(page.locator('.status.alert-success')).toBeVisible({ timeout: 15000 });

    //go home and verify that landed to home page successfully

await page.locator('#contact-page').getByRole('link', { name: 'Home' }).click();

await expect(page).toHaveURL('https://automationexercise.com/');
     await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible(); 

    });

