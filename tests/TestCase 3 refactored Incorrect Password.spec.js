/*
. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

*/


// tests/TestCase 3.spec.js
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";
import { LoginForm } from "../pages/LoginForm.js";

test("TestCase 3 refactored: Verify Incorrect Login Info", async ({ page }) => {
  // 1. Instantiate the required blueprints
  const homePage = new HomePage(page);
  const loginForm = new LoginForm(page);

  // 2. Navigate to the authentication screen
  await homePage.navigate();
  await expect(homePage.homeLogo).toBeVisible();
  await homePage.openSignupLogin();
  await expect(page.getByRole("heading", { name: "Login to your account" })).toBeVisible();

  // 3. Attempt login with invalid credentials
  await loginForm.submitLogin("invalid_email@example.com", "invalid_password");

  // 4. Verify the system rejects the login
  await expect(loginForm.errorMessage).toBeVisible();
});