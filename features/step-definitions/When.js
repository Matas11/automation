const { When } = require('@wdio/cucumber-framework');
const hostingerPage = require('./pageObjects/hostinger.page');
const Utils = require('../../utils/utils')

When(/^User is choosing the Business plan/, async () => {
    await Utils.waitForPageLoad(10000, 'Page did not load')
    await hostingerPage.cookiesButton.click();
    await hostingerPage.choosePlanButton.click();
});

When(/^User is choosing the 24-Month plan/, async () => {
     await hostingerPage.monthPlanButton.click();
});