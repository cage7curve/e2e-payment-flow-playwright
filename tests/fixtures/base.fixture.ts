import { test as base } from "@playwright/test";
import { ReceiptPage } from "../../pages/receipt.page";
import { PaymentMethodPage } from "../../pages/payment-method.page";
import { CreditCardPaymentPage } from "../../pages/credit-card-payment.page";

type PageFixtures = {
  receiptPage: ReceiptPage;
  paymentMethodPage: PaymentMethodPage;
  creditCardPaymentPage: CreditCardPaymentPage;
};

export const test = base.extend<PageFixtures>({
  receiptPage: async ({ page }, use) => {
    const receiptPage = new ReceiptPage(page);
    await use(receiptPage);
  },
  paymentMethodPage: async ({ page }, use) => {
    const paymentMethodPage = new PaymentMethodPage(page);
    await use(paymentMethodPage);
  },
  creditCardPaymentPage: async ({ page }, use) => {
    const creditCardPaymentPage = new CreditCardPaymentPage(page);
    await use(creditCardPaymentPage);
  },
});

export { expect } from "@playwright/test";
