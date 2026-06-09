import { Page, Locator } from '@playwright/test';

export class HomePage {
    private contact: Locator;
    private shop: Locator;

    constructor(private page: Page) {
        this.contact = page.getByRole('link', { name: 'Contact' });
        this.shop = page.getByRole('link', { name: 'Shop', exact: true });
    }

    async navigateToHomePage() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/');
    }

    async navigateToContactPage() {
        await this.contact.click();
    }

    async navigateToShopPage() {
        await this.shop.click();
    }
}