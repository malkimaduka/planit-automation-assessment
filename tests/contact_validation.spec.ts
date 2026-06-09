import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

test('Test Case 1 - Validate mandatory fields', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactPage = new ContactPage(page);

  await homePage.navigateToHomePage();
  await homePage.navigateToContactPage();

  await contactPage.clickSubmit();

  await contactPage.verifyMandatoryFieldErrors();

  await contactPage.enterMandatoryFields(
    'Malki',
    'malki.test@gmail.com',
    'This is for testing'
  );

  await contactPage.verifyValidationErrorsAreCleared();
});
