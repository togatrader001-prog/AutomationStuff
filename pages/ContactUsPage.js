// pages/ContactUsPage.js
export class ContactUsPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.getInTouchHeader = page.getByRole("heading", { name: "Get In Touch" });
    this.nameInput = page.getByRole("textbox", { name: "Name" });
    this.emailInput = page.getByRole("textbox", { name: "Email", exact: true });
    this.subjectInput = page.getByRole("textbox", { name: "Subject" });
    this.messageInput = page.getByRole("textbox", { name: "Your Message Here" });
    this.uploadFileInput = page.locator('input[name="upload_file"]');
    this.submitButton = page.getByRole("button", { name: "Submit" });
    
    // Using the exact class string fixes the chained locator bug you had previously
    this.successMessage = page.locator(".status.alert-success");
    
    // Bypasses the navbar icon to click the specific green button under the form
    this.homeButton = page.locator(".btn-success").filter({ hasText: "Home" });
  }

  // --- ACTIONS ---

  async submitInquiry(name, email, subject, message, fileName) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);

    // Playwright automatically resolves relative paths starting from your project root
    if (fileName) {
      await this.uploadFileInput.setInputFiles(fileName);
    }

  if (fileName) {
      await this.uploadFileInput.setInputFiles(fileName);
    }

    // THE FIX: Arm the background listener first, THEN click
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
    await this.submitButton.click();
  
  }
}