import { Page, Locator } from '@playwright/test';

export class ShopPage {
    private product: Locator;
    private cart: Locator;

    constructor(private page: Page) {
        this.product = page.locator('.product');
        this.cart = page.getByRole('link', { name: /Cart/ });
    }

    private getProduct(productName: string): Locator {
        return this.product.filter({ hasText: productName });
    }

    async buyProduct(productName: string, quantity: number) {
        const product = this.getProduct(productName);

        for (let i = 0; i < quantity; i++) {
        await product.getByRole('link', { name: 'Buy' }).click();
        }
    }

    async navigateToCart() {
        await this.cart.click();
    }

    async getProductPrice(productName: string): Promise<number> {

        const product = this.page
            .locator('.product')
            .filter({ hasText: productName });

        const priceText = await product
            .locator('.product-price')
            .textContent();

        return Number(priceText?.replace('$', ''));
    }
}