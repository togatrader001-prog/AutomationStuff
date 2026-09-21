// Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and already registered email address
// 7. Click 'Signup' button
// 8. Verify error 'Email Address already exist!' is visible
//@ts-check
// tests/TestCase 5.spec.js
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";
import { SignupForm } from "../pages/SignupForm.js";
import { LoginForm } from "../pages/LoginForm.js";

test("TestCase 5 refactored: Register User with existing email", async ({ page }) => {
  const homePage = new HomePage(page);
  const signupForm = new SignupForm(page);
  const loginForm = new LoginForm(page);
  
  const testName = "SmellyJapaneseGirl";
  const testEmail = `case5-${Date.now()}@example.com`;
  const testPassword = "Password123!";

  // 1. The Ad Blocker safeguard
  await page.route("**/*{googleads,doubleclick,adservice}*", route => route.abort());

  // 2. PRECONDITION: Navigate and create the initial account
  await homePage.navigate();
  await expect(homePage.homeLogo).toBeVisible();
  await homePage.openSignupLogin();
  
  await signupForm.submitInitialSignup(testName, testEmail);
  await signupForm.fillAccountDetails(testPassword);
  await signupForm.continueButton.click();

  // 3. PRECONDITION: Log out so we can see the signup screen again
  await homePage.logout();

  // 4. MAIN TEST: Navigate back to Signup/Login
  await homePage.openSignupLogin();
  await expect(signupForm.newUserSignupHeader).toBeVisible();

  // 5. Attempt to sign up with the exact same email
  await signupForm.submitInitialSignup(testName, testEmail);

  // 6. Verify the system rejects the duplicate email
  await expect(signupForm.emailExistsError).toBeVisible();

  // 7. CLEANUP: Log in with the account and delete it
  await loginForm.submitLogin(testEmail, testPassword);
  await signupForm.deleteAccountLink.click();
  await signupForm.continueButton.click();
});