// @ts-check
import { test, expect } from "@playwright/test";

test.skip("Should have shuffle cards info", async ({ page }) => {
	await page.goto("/");

	const shufflesCardsTxt = await page.locator("#shuffle").textContent();
	expect(shufflesCardsTxt).toBe("Shuffle the Cards:");

	const shufflesCardsUrl = await page.locator("#shuffle + pre").textContent();

  expect(shufflesCardsUrl).toBe("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
});


