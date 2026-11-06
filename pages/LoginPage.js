class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-btn');
    this.error = page.locator('#login-error');
  }
  async goto() { await this.page.goto('index.html'); }
  async login(user, pass) {
    if (user) await this.username.fill(user);
    if (pass) await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
module.exports = { LoginPage };
