// @ts-check
import { test, expect } from "@playwright/test";

test("sample test run", async ({ page }) => {
	const testEmail = `smellyjapanesegirl${Date.now()}@gmail.com`;

	await page.goto("https://automationexercise.com/");

	await expect(
		page.getByRole("link", { name: "Website for automation" }),
	).toBeVisible(); //verify homepage is visible

	await expect(
		page.getByRole("link", { name: "Signup / Login" }),
	).toBeVisible(); //verify 'Signup / Login' button is visible

	await page.getByRole("link", { name: "Signup / Login" }).click(); //click on 'Signup / Login' button

	await expect(
		page.getByRole("heading", { name: "New User Signup!" }),
	).toBeVisible();

	await page.getByRole("textbox", { name: "Name" }).fill("SmellyJapaneseGirl");

	await page
		.getByRole("textbox", { name: "Email Address" })
		.nth(1)
		.fill(testEmail);

	await page.getByRole("button", { name: "Signup" }).click();

	await expect(page.getByText("Enter Account Information")).toBeVisible();

	await page.getByRole("radio", { name: "Mrs." }).check();

	await page
		.getByRole("textbox", { name: "Name *", exact: true })
		.fill("SmellyJapaneseGirl");

	// email already there but this line wouldn't work anyway ---  await page.getByText('Email *').fill('SmellyJapaneseGirl@gmail.com');

	await page
		.getByRole("textbox", { name: "Password *" })
		.fill("SmellyJapaneseGirl123");

	await page.locator("#days").selectOption("10");

	await page.locator("#months").selectOption("8");

	await page.locator("#years").selectOption("2000");

	await page
		.getByRole("checkbox", { name: "Sign up for our newsletter!" })
		.check();

	await page
		.getByRole("checkbox", { name: "Receive special offers from" })
		.check();

	await page
		.getByRole("textbox", { name: "First name *" })
		.fill("SmellyJapaneseGirl");
	await page.getByRole("textbox", { name: "Last name *" }).fill("EwwwSmelly");
	await page
		.getByRole("textbox", { name: "Company", exact: true })
		.fill("OnlyFans");
	await page
		.getByRole("textbox", { name: "Address * (Street address, P." })
		.fill("1234 Jeff Bezos LivingRoom Street");
	await page.getByRole("textbox", { name: "Address 2" }).fill("side entrace");
	await page.getByLabel("Country *").selectOption("United States");

	await page.getByRole("textbox", { name: "State *" }).fill("New Jersey");

	await page.locator("#city").fill("Central");

	await page.locator("#zipcode").fill("12345");

	await page
		.getByRole("textbox", { name: "Mobile Number *" })
		.fill("1234567890");

	await page.getByRole("button", { name: "Create Account" }).click();

	await expect(page.getByText("Account Created!")).toBeVisible();

	await page.getByRole("link", { name: "Continue" }).click();

	await expect(page.getByText("Logged in as")).toBeVisible();

	await page.getByRole("link", { name: "Delete Account" }).click();

	await expect(page.getByText("Account Deleted!")).toBeVisible();

	await page.getByRole("link", { name: "Continue" }).click();
});
