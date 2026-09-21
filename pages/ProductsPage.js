// pages/ProductsPage.js
export class ProductsPage {
	constructor(page) {
		this.page = page;

		this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
		this.firstViewProductLink = page.getByRole('link', { name: ' View Product' }).first();
		this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
		this.searchButton = page.locator('#submit_search');
		this.searchedProductsHeader = page.getByRole('heading', { name: 'Searched Products' });
		this.firstProductWrapper = page.locator('.product-image-wrapper').first();
	}

	async openFirstProduct() {
		await this.firstViewProductLink.click();
	}

	async submitSearch(productName) {
		await this.searchInput.fill(productName);
		await this.searchButton.click();
	}
}
