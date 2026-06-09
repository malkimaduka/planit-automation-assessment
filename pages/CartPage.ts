import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    private row: Locator;
        
    constructor(private page: Page) {
        this.row = page.getByRole('row');
    }

    private getProductRow(productName: string): Locator {
        return this.row.filter({ hasText: productName });
    }

    async verifyProductPrice(productName: string, expectedPrice: number) {
        const row = this.getProductRow(productName);

        await expect(row).toContainText(`$${expectedPrice.toFixed(2)}`);
    }

    async verifyProductQuantity(productName: string, expectedQuantity: number) {
        const row = this.getProductRow(productName);

        await expect(row.getByRole('spinbutton')).toHaveValue(
        expectedQuantity.toString()
        );
    }

    async verifyProductSubtotal(productName: string, expectedSubtotal: number) {
        const row = this.getProductRow(productName);

        await expect(row).toContainText(`$${expectedSubtotal.toFixed(2)}`);
    }

}