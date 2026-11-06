const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

// Optional: PW_CHROME_PATH lets you point to an already-installed Chromium.
const launchOptions = process.env.PW_CHROME_PATH ? { executablePath: process.env.PW_CHROME_PATH } : {};

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'file://' + path.resolve(__dirname, 'demo-app') + '/',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], launchOptions } },
    // add more browsers: { name: 'firefox', use: { ...devices['Desktop Firefox'] } }
  ],
});
