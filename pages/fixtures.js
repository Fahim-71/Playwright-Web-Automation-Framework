// Custom fixtures: every test receives ready-made page objects.
const base = require('@playwright/test');
const { LoginPage } = require('./LoginPage');
const { ProductsPage } = require('./ProductsPage');
const { CartPage } = require('./CartPage');
const { CheckoutPage } = require('./CheckoutPage');

const test = base.test.extend({
  loginPage: async ({ page }, use) => { const p = new LoginPage(page); await p.goto(); await use(p); },
  productsPage: async ({ page }, use) => { await use(new ProductsPage(page)); },
  cartPage: async ({ page }, use) => { await use(new CartPage(page)); },
  checkoutPage: async ({ page }, use) => { await use(new CheckoutPage(page)); },
  // logged-in state shortcut
  loggedIn: async ({ loginPage }, use) => { await loginPage.login('standard_user', 'secret123'); await use(); },
});
module.exports = { test, expect: base.expect };
