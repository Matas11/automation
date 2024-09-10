const { Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const hostingerPage = require('./pageObjects/hostinger.page');

Then(/^User should see 24-Month Business plan added to cart (.*)/, async (message) => {
    await expect (hostingerPage.paymentOveriew).toBeExisting();
    await expect (hostingerPage.paymentOveriew).toHaveText(expect.stringContaining(message));
});