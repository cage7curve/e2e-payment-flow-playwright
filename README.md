# E2E Test – Payment Flow (Receipt Share Page)

This project contains an End-to-End (E2E) test implemented using Playwright to validate the payment flow on the Receipt Share page.

## 📌 Test Objective

To verify that when a specific test credit card is used, the system displays the correct error popup message.

---

## 🔗 Test URL
https://doc-api-canary.flowaccount.com/api/receipt/share/html/th/jkzzr7vueg6l8j38vrgdq?DoOriginal=1&DoCopies=1

---

## 🧪 Test Scenario

### Scenario 1:
When entering the test credit card:

- Card number: `4242 4242 4242 4242`
- Expiration date: `08/28`
- CVV: `123`

### Expected Result:

A popup/modal must appear with the exact following text:
...
รายการนี้ไม่สามารถชำระเงินได้
กรุณาติดต่อผู้ขาย หรือผู้ให้บริการเพื่อทำรายการใหม่อีกครั้ง
...

The test asserts:
- The popup is visible
- Both lines of text are displayed correctly

---

## 🏗 Project Structure
.
├── pages/
├── tests/
│ ├── fixtures/
│ └── payment.spec.ts
├── playwright.config.ts
├── package.json
└── README.md

---

## ⚙️ Tech Stack

- Playwright (E2E testing framework)
- TypeScript
- Page Object Model (POM) design pattern

---

## 📦 Prerequisites

- Node.js v18+  
- npm v9+

Check your version:
node -v
npm -v

---

## 🚀 Installation

Clone the repository:
git clone <your-repo-url>
cd <your-project-folder>

Install dependencies:
npm ci

Install Playwright browsers:
npx playwright install

---

## ▶️ Run Tests

Run in headless mode:
npm test

Run with UI (headed mode):
npm run test:headed

---

## 📊 View Test Report

After running tests:
npm run report

This will open the Playwright HTML report.

---

## 🧠 Implementation Approach

- Implemented using **Page Object Model (POM)** for maintainability and separation of concerns.
- Used Playwright fixtures for dependency injection of page objects.
- Used `expect(locator).toBeVisible()` and text assertions for validation.
- Avoided hard-coded delays (`sleep`) and used proper wait strategies.
- If payment provider content is inside an iframe, `frameLocator()` is used to interact with elements safely.

---

## ✅ Stability Considerations

- Proper wait conditions are applied before interactions.
- No fixed timeout-based sleeps.
- Selectors are designed to be stable and readable.
- Test was executed multiple times to ensure no flakiness.

---

## 🎥 Demo

A short demo video (3–7 minutes) demonstrates:

- Scenario explanation
- Test execution (pass result)
- Popup validation
- Playwright HTML report