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

/// tests/TestCase 6.spec.js
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";
import { ContactUsPage } from "../pages/ContactUsPage.js";

test("TestCase 6 refactored: Contact Us Form", async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  // 1. The Ad Blocker safeguard
  await page.route("**/*{googleads,doubleclick,adservice}*", route => route.abort());

  // 2. Navigate and verify home page
  await homePage.navigate();
  await expect(homePage.homeLogo).toBeVisible();

  // 3. Navigate to Contact Us
  await homePage.openContactUs();
  await expect(contactUsPage.getInTouchHeader).toBeVisible();

  // 4. Submit the entire inquiry in one flow
  await contactUsPage.submitInquiry(
    "Automation Test User",
    `automation-test-${Date.now()}@example.com`,
    "Contact Us Test",
    "This is an automated Contact Us form test.",
    "SomethingToSend.txt" 
  );

  // 5. Verify success (with an extended 15-second timeout for the slow server)
  await expect(contactUsPage.successMessage).toBeVisible({ timeout: 15000 });

  // 6. Return home using the green button and verify
  await contactUsPage.homeButton.click();
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(homePage.homeLogo).toBeVisible();
});