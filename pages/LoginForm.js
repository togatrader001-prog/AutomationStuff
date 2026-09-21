export class LoginForm {
	constructor(page) {
		this.page = page;
		this.loginEmailInput = page.locator("form").filter({ hasText: "Login" }).getByPlaceholder("Email Address");
        this.loginPasswordInput = page.getByRole("textbox", { name: "Password" });
        this.loginButton = page.getByRole("button", { name: "Login" });
        this.errorMessage = page.getByText("Your email or password is incorrect!");
    }
	async submitLogin(email, password) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
	}
}