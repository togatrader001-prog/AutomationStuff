// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Delete Account' button
// 10. Verify that 'ACCOUNT DELETED!' is visible
// tests/TestCase 2.spec.js
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";
import { SignupForm } from "../pages/SignupForm.js";
import { LoginForm } from "../pages/LoginForm.js";

test("TestCase 2 refactored: Verify Login", async ({ page }) => {
  // 1. Instantiate the blueprints
  const homePage = new HomePage(page);
  const signupForm = new SignupForm(page);
  const loginForm = new LoginForm(page);
  
  const testName = "SmellyJapaneseGirl";
  const testEmail = `smellyjapanesegirl${Date.now()}@gmail.com`;
  const testPassword = "SmellyJapaneseGirl123";

  // 2 PRECONDITION: Navigate to homepage
  await homePage.navigate();
  await expect(homePage.homeLogo).toBeVisible();
  await homePage.openSignupLogin();

  // 3. PRECONDITION: Create a new account
  
  await signupForm.submitInitialSignup(testName, testEmail);
  await signupForm.fillAccountDetails(testPassword);
  await signupForm.continueButton.click();

  // 4. PRECONDITION: Log out to reset state
  await homePage.logout();

  // 5. MAIN TEST: Log back in using the LoginForm component
  await homePage.openSignupLogin();
  await expect(page.getByRole("heading", { name: "Login to your account" })).toBeVisible();
  
  await loginForm.submitLogin(testEmail, testPassword);
  await expect(page.getByText(`Logged in as ${testName}`)).toBeVisible();

  // 6. CLEANUP: Delete the account
  await signupForm.deleteAccountLink.click();
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await signupForm.continueButton.click();
});