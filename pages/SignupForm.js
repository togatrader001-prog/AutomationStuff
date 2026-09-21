export class SignupForm {
	constructor(page) {
		this.page = page;

		// 1. Initial Signup Form Locators
		this.nameInput = page.getByRole('textbox', { name: 'Name' });
		this.emailInput = page.getByRole('textbox', { name: 'Email Address' }).nth(1);
		this.signupButton = page.getByRole('button', { name: 'Signup' });
		this.newUserSignupHeader = page.getByRole("heading", { name: "New User Signup!" });
    	this.emailExistsError = page.getByText("Email Address already exist!");

		// 2. Account Information Form Locators
		this.titleRadio = page.getByRole('radio', { name: 'Mrs.' });
		this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
		this.daysSelect = page.locator('#days');
		this.monthsSelect = page.locator('#months');
		this.yearsSelect = page.locator('#years');
		this.newsletterCheck = page.getByRole('checkbox', {
			name: 'Sign up for our newsletter!',
		});
		this.offersCheck = page.getByRole('checkbox', {
			name: 'Receive special offers from',
		});

		// 3. Address Form Locators
		this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
		this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
		this.companyInput = page.getByRole('textbox', {
			name: 'Company',
			exact: true,
		});
		this.address1Input = page.getByRole('textbox', {
			name: 'Address * (Street address, P.',
		});
		this.address2Input = page.getByRole('textbox', { name: 'Address 2' });
		this.countrySelect = page.getByLabel('Country *');
		this.stateInput = page.getByRole('textbox', { name: 'State *' });
		this.cityInput = page.locator('#city');
		this.zipcodeInput = page.locator('#zipcode');
		this.mobileInput = page.getByRole('textbox', { name: 'Mobile Number *' });
		this.createAccountButton = page.getByRole('button', {
			name: 'Create Account',
		});

		// 4. Post-Registration Locators
		this.continueButton = page.getByRole('link', { name: 'Continue' });
		this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });

		
	}

	// --- ACTIONS ---

	async submitInitialSignup(name, email) {
		await this.nameInput.fill(name);
		await this.emailInput.fill(email);
		await this.signupButton.click();
	}

	async fillAccountDetails(password) {
		await this.titleRadio.check();
		await this.passwordInput.fill(password);
		await this.daysSelect.selectOption('10');
		await this.monthsSelect.selectOption('8');
		await this.yearsSelect.selectOption('2000');
		await this.newsletterCheck.check();
		await this.offersCheck.check();

		// Hardcoding the address data inside the method to keep the test file clean
		await this.firstNameInput.fill('SmellyJapaneseGirl');
		await this.lastNameInput.fill('EwwwSmelly');
		await this.companyInput.fill('OnlyFans');
		await this.address1Input.fill('1234 Jeff Bezos LivingRoom Street');
		await this.address2Input.fill('side entrace');
		await this.countrySelect.selectOption('United States');
		await this.stateInput.fill('New Jersey');
		await this.cityInput.fill('Central');
		await this.zipcodeInput.fill('12345');
		await this.mobileInput.fill('1234567890');

		await this.createAccountButton.click();
	}
}
