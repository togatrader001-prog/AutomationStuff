// pages/ProductDetailPage.js
export class ProductDetailPage {
	constructor(page) {
		this.page = page;
		this.productName = page.getByRole('heading', { name: 'Blue Top' });
		this.productCategory = page.getByText('Category: Women > Tops');
		this.productPrice = page.getByText('Rs.');
		this.productAvailability = page.getByText('Availability:');
		this.productCondition = page.getByText('Condition:');
		this.productBrand = page.getByText('Brand:');
	}
}
