// tests/TestCase 9.spec.js
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";
import { ProductsPage } from "../pages/ProductsPage.js";

test("TestCase 9 refactored: Searching for Product", async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);

  // 1. The Ad Blocker: We must include this so the "Products" click doesn't get hijacked
  await page.route("**/*{googleads,doubleclick,adservice}*", route => route.abort());

  // 2. Navigate and verify home page
  await homePage.navigate();
  await expect(homePage.homeLogo).toBeVisible();

  // 3. Navigate to Products page and verify
  await homePage.openProducts();
  await expect(productsPage.allProductsHeader).toBeVisible();

  // 4. Execute the search
  const searchTarget = "Men Tshirt";
  await productsPage.submitSearch(searchTarget);

  // 5. Verify the search executed properly
  await expect(productsPage.searchInput).toHaveValue(searchTarget);
  await expect(productsPage.searchedProductsHeader).toBeVisible();
  
  // 6. Verify the search results are visible on the page
  await expect(page.getByText(searchTarget).nth(1)).toBeVisible();
  await expect(productsPage.firstProductWrapper).toBeVisible();
});