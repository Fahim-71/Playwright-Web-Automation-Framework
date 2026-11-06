class CartPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('#cart-items .cart-item');
    this.total = page.locator('#cart-total');
    this.checkoutBtn = page.locator('#checkout-btn');
  }
  async removeItem(index) { await this.page.locator(`#remove-${index}`).click(); }
  async checkout() { await this.checkoutBtn.click(); }
}
module.exports = { CartPage };
