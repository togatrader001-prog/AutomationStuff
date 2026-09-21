// tests/TestCase 1.spec.js
import { test, expect } from "@playwright/test";
import { SignupForm } from "../pages/SignupForm.js";
import { HomePage } from "../pages/HomePage.js"; // Import your home page

test("E2E refactored - User Registration and Deletion", async ({ page }) => {
  // 1. Instantiate BOTH page objects
  const homePage = new HomePage(page); 
  const signupForm = new SignupForm(page);
  const testEmail = `smellyjapanesegirl${Date.now()}@gmail.com`;

  // 2. HomePage handles the base navigation
  await homePage.navigate();
  await expect(homePage.homeLogo).toBeVisible();
  await homePage.openSignupLogin();
  await expect(page.getByRole("heading", { name: "New User Signup!" })).toBeVisible();

  // 3. SignupPage takes over to handle the specific forms
  await signupForm.submitInitialSignup("SmellyJapaneseGirl", testEmail);
  await expect(page.getByText("Enter Account Information")).toBeVisible();

  await signupForm.fillAccountDetails("SmellyJapaneseGirl123");
  await expect(page.getByText("Account Created!")).toBeVisible();

  // 4. Teardown / Cleanup
  await signupForm.continueButton.click();
  await expect(page.getByText("Logged in as")).toBeVisible();

  await signupForm.deleteAccountLink.click();
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await signupForm.continueButton.click();
});