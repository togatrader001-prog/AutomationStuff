//first attempt

export class HomePage {
	constructor(page) {
		this.page = page; // Saves the live tab instance
		this.homeLogo = page.getByRole("link", { name: "Website for automation" });
		this.testCasesNavLink = page.getByRole("link", { name: "Test Cases" }).first();
		this.testCasesHeader = page.getByRole("heading", { name: "Test Cases", exact: true });
		this.signupLoginNavLink = page.getByRole("link", { name: "Signup / Login" });
		this.logoutNavLink = page.getByRole("link", { name: " Logout" });
		this.productsNavLink = page.getByRole("link", { name: " Products" });
		this.subscriptionHeader = page.getByRole("heading", { name: "Subscription" });
    	this.subscriptionEmailInput = page.getByRole("textbox", { name: "Your email address" });
	    this.subscribeButton = page.locator("#subscribe");
	    this.subscriptionSuccessMessage = page.getByText("You have been successfully subscribed!", { exact: true });	
		this.contactUsNavLink = page.getByRole("link", { name: /Contact us/i });
	}

	// wrap the .goto() action inside a method called navigate:
	async navigate() {
		await this.page.goto("https://automationexercise.com/");
	}

	// wrap the .click() action inside a method called openTestCases
	async openTestCases() {
		await this.testCasesNavLink.click();
	}

	// adding sign up / login link to click
	async openSignupLogin() {
		await this.signupLoginNavLink.click();
	}
	// adding logout button tp click
	async logout() {
		await this.logoutNavLink.click();
	}

	//adding products button to click
	async openProducts() {
		await this.productsNavLink.click();
	}
	async submitSubscription(email) {
    	await this.subscriptionEmailInput.fill(email);
    	await this.subscribeButton.click();
  	}
	async openContactUs() {
      await this.contactUsNavLink.click();
    }
}
