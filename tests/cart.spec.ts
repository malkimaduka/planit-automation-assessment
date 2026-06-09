import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';

test('Test Case 3 - Verify cart prices, subtotals and total', async ({ page }) => {
  const homePage = new HomePage(page);
  const shopPage = new ShopPage(page);
  const cartPage = new CartPage(page);

  const stuffedFrog = {
    name: 'Stuffed Frog',
    quantity: 2,
  };

  const fluffyBunny = {
    name: 'Fluffy Bunny',
    quantity: 5,
  };

  const valentineBear = {
    name: 'Valentine Bear',
    quantity: 3,
  };

  await homePage.navigateToHomePage();
  await homePage.navigateToShopPage();

  const stuffedFrogPrice = await shopPage.getProductPrice(stuffedFrog.name);
  const fluffyBunnyPrice = await shopPage.getProductPrice(fluffyBunny.name);
  const valentineBearPrice = await shopPage.getProductPrice(valentineBear.name);

  await shopPage.buyProduct(stuffedFrog.name, stuffedFrog.quantity);
  await shopPage.buyProduct(fluffyBunny.name, fluffyBunny.quantity);
  await shopPage.buyProduct(valentineBear.name, valentineBear.quantity);

  await shopPage.navigateToCart();

  const stuffedFrogSubtotal = stuffedFrogPrice * stuffedFrog.quantity;
  const fluffyBunnySubtotal = fluffyBunnyPrice * fluffyBunny.quantity;
  const valentineBearSubtotal = valentineBearPrice * valentineBear.quantity;

  await cartPage.verifyProductPrice(stuffedFrog.name, stuffedFrogPrice);
  await cartPage.verifyProductQuantity(stuffedFrog.name, stuffedFrog.quantity);
  await cartPage.verifyProductSubtotal(stuffedFrog.name, stuffedFrogSubtotal);

  await cartPage.verifyProductPrice(fluffyBunny.name, fluffyBunnyPrice);
  await cartPage.verifyProductQuantity(fluffyBunny.name, fluffyBunny.quantity);
  await cartPage.verifyProductSubtotal(fluffyBunny.name, fluffyBunnySubtotal);

  await cartPage.verifyProductPrice(valentineBear.name, valentineBearPrice);
  await cartPage.verifyProductQuantity(valentineBear.name, valentineBear.quantity);
  await cartPage.verifyProductSubtotal(valentineBear.name, valentineBearSubtotal);

});