class Utils {

    async waitForPageLoad(timeout, timeoutMsg) {
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            {
                timeout,
                timeoutMsg
            }
        );
    }

}
module.exports = new Utils()

