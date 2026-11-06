const { test, expect } = require('../pages/fixtures');

test.describe('Cart', () => {
  test('adding products updates the cart badge @smoke', async ({ loggedIn, productsPage }) => {
    await productsPage.addProduct(1);
    await productsPage.addProduct(2);
    await expect(productsPage.cartCount).toHaveText('2');
  });

  test('cart total equals sum of item prices', async ({ loggedIn, productsPage, cartPage }) => {
    await productsPage.addProduct(1);   // 29.99
    await productsPage.addProduct(2);   // 15.50
    await productsPage.openCart();
    await expect(cartPage.items).toHaveCount(2);
    await expect(cartPage.total).toHaveText('45.49');
  });

  test('removing an item recalculates the total', async ({ loggedIn, productsPage, cartPage }) => {
    await productsPage.addProduct(1);
    await productsPage.addProduct(2);
    await productsPage.openCart();
    await cartPage.removeItem(0);
    await expect(cartPage.items).toHaveCount(1);
    await expect(cartPage.total).toHaveText('15.50');
  });
});
