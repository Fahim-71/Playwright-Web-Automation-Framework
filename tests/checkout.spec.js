const { test, expect } = require('../pages/fixtures');

test.describe('Checkout', () => {
  test.beforeEach(async ({ loggedIn, productsPage, cartPage }) => {
    await productsPage.addProduct(3);
    await productsPage.openCart();
    await cartPage.checkout();
  });

  test('end-to-end purchase @smoke', async ({ checkoutPage }) => {
    await checkoutPage.fill('Test', 'User', '1200');
    await checkoutPage.finish();
    await expect(checkoutPage.success).toHaveText('Thank you for your order!');
  });

  test('missing details show an error', async ({ checkoutPage }) => {
    await checkoutPage.fill('Test', '', '');
    await checkoutPage.finish();
    await expect(checkoutPage.error).toHaveText('All fields are required');
  });
});
