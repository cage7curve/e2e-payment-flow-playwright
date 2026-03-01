import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CreditCardPaymentPage extends BasePage {
  readonly headerTitle = this.page.getByText("ชำระเงินผ่านบัตรเครดิต", {
    exact: true,
  });

  readonly submitButton = this.page.getByRole("button", {
    name: /ชำระเงิน/,
  });

  private readonly cardNumberFrame = this.page.frameLocator(
  '#card-number-element iframe[title="Secure card number input frame"]',
);

  private readonly expiryFrame = this.page.frameLocator(
  '#card-expiry-element iframe[title="Secure expiration date input frame"]',
);

  private readonly cvcFrame = this.page.frameLocator(
    '#card-cvc-element iframe[title="Secure CVC input frame"]',
  );

  constructor(page: Page) {
    super(page);
  }

  async waitForPageReady() {
    await expect(this.headerTitle).toBeVisible({
      timeout: 15000,
    });
  }

  async fillCardNumber(cardNumber: string) {
    await this.cardNumberFrame
      .getByRole("textbox", { name: "Credit or debit card number" })
      .fill(cardNumber);
  }

  async fillExpiry(expiry: string) {
    await this.expiryFrame
      .getByRole("textbox", { name: "Expiration date" })
      .fill(expiry);
  }

  async fillCvc(cvc: string) {
    await this.cvcFrame.getByPlaceholder("CVC/CVV").fill(cvc);
  }

  async payWithCard(cardNumber: string, expiry: string, cvc: string) {
    await this.fillCardNumber(cardNumber);
    await this.fillExpiry(expiry);
    await this.fillCvc(cvc);

    await this.submitButton.click();
  }
}
