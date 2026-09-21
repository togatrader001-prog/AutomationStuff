// . Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

// tests/TestCase 8.spec.js
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";
import { ProductsPage } from "../pages/ProductsPage.js";
import { ProductDetailPage } from "../pages/ProductDetailPage.js";

test("TestCase 8 refactored: Verify All Products and product detail page", async ({ page }) => {
  // 1. Instantiate the blueprints
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const productDetailPage = new ProductDetailPage(page);

  // 2. Navigate and verify home page
  await homePage.navigate();
  await expect(homePage.homeLogo).toBeVisible();

  await page.route("**/*{googleads,doubleclick,adservice}*", route => route.abort());

  
  // 3. Navigate to Products page and verify
  await homePage.openProducts();
  await expect(productsPage.allProductsHeader).toBeVisible();

  // 4. Click on the first product
  await productsPage.openFirstProduct();

  // 5. Verify product details are visible
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productCategory).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.productAvailability).toBeVisible();
  await expect(productDetailPage.productCondition).toBeVisible();
  await expect(productDetailPage.productBrand).toBeVisible();
});