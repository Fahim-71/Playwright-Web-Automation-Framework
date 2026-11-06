const { test, expect } = require('../pages/fixtures');

test.describe('Login', () => {
  test('valid login opens the products page @smoke', async ({ loginPage, productsPage }) => {
    await loginPage.login('standard_user', 'secret123');
    await expect(productsPage.title).toBeVisible();
  });

  // data-driven negative tests
  const invalid = [
    ['standard_user', 'wrong', 'Invalid username or password'],
    ['unknown_user', 'secret123', 'Invalid username or password'],
    ['locked_user', 'secret123', 'This user has been locked out'],
    ['', '', 'Username and password are required'],
    ['standard_user', '', 'Username and password are required'],
  ];
  for (const [user, pass, message] of invalid) {
    test(`invalid login shows error: "${user}" / "${pass}"`, async ({ loginPage }) => {
      await loginPage.login(user, pass);
      await expect(loginPage.error).toHaveText(message);
    });
  }

  test('logout returns to the login page', async ({ loggedIn, productsPage, loginPage }) => {
    await productsPage.logout();
    await expect(loginPage.loginBtn).toBeVisible();
    await expect(loginPage.username).toHaveValue('');
  });
});
