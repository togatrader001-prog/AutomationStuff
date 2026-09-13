import { test, expect } from '@playwright/test';

test.describe('Test Case 5: Register User with existing email', () => {
  test('Register User with existing email', async ({ page, request }) => {
    // 1. Generate a unique email address for this test run.
    const password = 'Password123!';
    const email = `case5-${Date.now()}-${Math.random().toString(36).slice(2)}@example.com`;

    // 2. Create a temporary account through AutomationExercise's API using that unique email.
    const createAccountResponse = await request.post('https://automationexercise.com/api/createAccount', {
      form: {
        name: 'SmellyJapaneseGirlAPI',
        email,
        password,
        title: 'Mr',
        birth_date: '1',
        birth_month: '1',
        birth_year: '1990',
        firstname: 'Existing',
        lastname: 'User',
        company: 'Automation Exercise',
        address1: '123 Test Street',
        address2: 'Suite 1',
        country: 'United States',
        zipcode: '12345',
        state: 'Test State',
        city: 'Test City',
        mobile_number: '5551234567',
      },
    });
    expect(createAccountResponse.ok()).toBeTruthy();
    
  console.log(createAccountResponse.status(), 'Account creation response status');



   



    try {
      // 3. Open the website home page and verify it is visible.
      await page.goto('https://automationexercise.com');
      await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();

      // 4. Click Signup / Login.
      await page.locator("a[href='/login']").click();

      // 5. Verify New User Signup! is visible.
      await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

      // 6. Enter a name and the newly created account's email address.
      await page.locator("input[data-qa='signup-name']").fill('SmellyJapaneseGirlAPI');
      await page.locator("input[data-qa='signup-email']").fill(email);

      // 7. Click Signup.
      await page.locator("button[data-qa='signup-button']").click();

      // 8. Verify Email Address already exist! is visible.
      await expect(page.getByText('Email Address already exist!')).toBeVisible();
    } finally {
      // 9. Delete the temporary account through the API during cleanup.
      const deleteAccountResponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
        form: { email, password },
      });
      expect(deleteAccountResponse.ok()).toBeTruthy();
    }
  });
});
