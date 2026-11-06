class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('#page-title');
    this.cartCount = page.locator('#cart-count');
    this.cartLink = page.locator('#cart-link');
    this.logoutBtn = page.locator('#logout-btn');
  }
  async addProduct(id) { await this.page.locator(`#add-${id}`).click(); }
  async openCart() { await this.cartLink.click(); }
  async logout() { await this.logoutBtn.click(); }
}
module.exports = { ProductsPage };
