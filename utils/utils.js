class Utils {

    async waitForPageLoad(timeout, timeoutMsg) {
        await browser.pause(3000)
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

