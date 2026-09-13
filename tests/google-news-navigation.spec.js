import { test, expect } from '@playwright/test';

test.describe('Google News navigation', () => {
  test('Open stories, return to the feed, and open another story', async ({ page }) => {
    // 1. Navigate to https://news.google.com/home?hl=en-US&gl=US&ceid=US:en.
    await page.goto('https://news.google.com/home?hl=en-US&gl=US&ceid=US:en');

    // 2. Verify the Google News page is visible.
    await expect(page.getByRole('link', { name: 'Google News' })).toBeVisible();

    // 3. Scroll down to the first available news story.
    await page.keyboard.press('PageDown');

    // 4. Click the first available news story.
    const storyLinks = page.locator('main a[href*="/stories/"]:not([aria-label])');
    await storyLinks.first().click();

    // 5. Verify a story page opens.
    await expect(page).toHaveURL(/\/stories\//);

    // 6. Go back to Google News.
    await page.goBack();
    await expect(page).toHaveURL(/\/home\?/);

    // 7. Scroll down farther than the first position.
    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageDown');

    // 8. Click a different available news story.
    await storyLinks.nth(1).click();

    // 9. Verify the second story page opens.
    await expect(page).toHaveURL(/\/stories\//);
  });
});
