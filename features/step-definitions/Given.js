const { Given } = require('@wdio/cucumber-framework');
const WebUrls = require('../../config/web_urls');

Given(/^User is opening the Hostinger website/, async () => {
    await browser.url(WebUrls.HOSTINGER_URL);
});