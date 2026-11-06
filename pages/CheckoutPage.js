class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.finishBtn = page.locator('#finish-btn');
    this.error = page.locator('#checkout-error');
    this.success = page.locator('#success-msg');
  }
  async fill(first, last, postal) {
    if (first) await this.firstName.fill(first);
    if (last) await this.lastName.fill(last);
    if (postal) await this.postalCode.fill(postal);
  }
  async finish() { await this.finishBtn.click(); }
}
module.exports = { CheckoutPage };
