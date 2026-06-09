import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
    private submitButton: Locator;
    private forenameInput: Locator;
    private emailInput: Locator;
    private messageInput: Locator;
    private forenameError: Locator;
    private emailError: Locator;
    private messageError: Locator;
    private successMessage: Locator;

    constructor(private page: Page) {
        this.submitButton = page.getByRole('link', { name: 'Submit' });
        this.forenameInput = page.getByRole('textbox', { name: 'Forename *'});
        this.emailInput = page.getByRole('textbox', { name: 'Email *'});
        this.messageInput = page.getByRole('textbox', { name: 'Message *'});
        this.forenameError = page.getByText('Forename is required');
        this.emailError = page.getByText('Email is required');
        this.messageError = page.getByText('Message is required');
        this.successMessage = page.locator('.alert-success');
    }

    async clickSubmit() {
        await this.submitButton.click();
    }

    async enterMandatoryFields(
        forename: string,
        email: string,
        message: string
    ) {
        await this.forenameInput.fill(forename);
        await this.emailInput.fill(email);
        await this.messageInput.fill(message);
    }

    async verifyMandatoryFieldErrors() {
        await expect(this.forenameError).toBeVisible();
        await expect(this.emailError).toBeVisible();
        await expect(this.messageError).toBeVisible();
    }
    async verifyValidationErrorsAreCleared() {
        await expect(this.forenameError).not.toBeVisible();
        await expect(this.emailError).not.toBeVisible();
        await expect(this.messageError).not.toBeVisible();
    }

    async verifySuccessfulSubmission(forename: string) {
        await this.successMessage.waitFor({
            state: 'visible',
            timeout: 20000
        });

        await expect(this.successMessage)
            .toContainText(`Thanks ${forename}`);
    }
}