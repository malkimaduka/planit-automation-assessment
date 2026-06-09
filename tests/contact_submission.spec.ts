import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

const executions = [1, 2, 3, 4, 5];

executions.forEach((runNumber) => {

    test(`Test Case 2 - Run ${runNumber}`, async ({ page }) => {

        const homePage = new HomePage(page);
        const contactPage = new ContactPage(page);

        const uniqueEmail = `malki${Date.now()}${runNumber}@gmail.com`;

        await homePage.navigateToHomePage();
        await homePage.navigateToContactPage();

        await contactPage.enterMandatoryFields(
            'Malki',
            uniqueEmail,
            `Automation Test Run ${runNumber}`
        );

        await contactPage.clickSubmit();

        await contactPage.verifySuccessfulSubmission('Malki');
    });

});
