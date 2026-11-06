# Playwright Web Automation Framework

End-to-end UI test automation built with **Playwright Test (JavaScript)** and the **Page Object Model**.
It tests a small demo shop (`demo-app/index.html`) included in this repo, so the tests run anywhere without
depending on an external website.

## Features
- Page Object Model (`pages/`) + custom **fixtures** (`pages/fixtures.js`) that inject page objects and a logged-in state
- Auto-waiting locators and web-first assertions (`expect(...).toHaveText`) - no manual sleeps
- Data-driven negative login tests (loop over a data table)
- `@smoke` tag for quick runs, parallel execution, HTML report
- Screenshot and **trace** (Trace Viewer) saved automatically on failure

## Test coverage (12 tests)
| Area | Tests |
|---|---|
| Login | valid login, 5 data-driven invalid logins, logout |
| Cart | add to cart badge, total calculation, remove item |
| Checkout | full purchase, missing-details validation |

## Run
```bash
npm install
npx playwright install chromium   # one-time browser download
npm test                          # all tests (headless)
npm run test:smoke                # only @smoke tests
npm run test:headed               # watch the browser
npm run report                    # open the HTML report
```

## Structure
```
demo-app/index.html     application under test
pages/                  page objects + fixtures
tests/                  login, cart, checkout specs
playwright.config.js    baseURL, reporters, screenshot/trace settings
```
