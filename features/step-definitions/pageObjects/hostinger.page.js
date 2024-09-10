
 class HostingerPage {
    get cookiesButton() {
        return $("button[data-click-id='hgr-cookie_consent-decline_btn']");
      }
    get choosePlanButton() {
        return $('button[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_business"]');
      }
    get monthPlanButton() {
        return $$('#hcart-cart-period-selector .radio')[2];
      }
    get paymentOveriew() {
        return $('#payment-overview .plan-info__plan-name')
    }
};

module.exports = new HostingerPage()