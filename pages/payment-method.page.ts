import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class PaymentMethodPage extends BasePage {
  readonly pageTitle = this.page.locator(".title", {
    hasText: "เลือกวิธีการชำระเงิน",
  });

  readonly creditCardOption = this.page.locator("#credit-card-method");

  readonly nextButton = this.page.getByRole("button", {
    name: "ไปที่หน้าชำระเงิน",
  });

  constructor(page: Page) {
    super(page);
  }

  async waitForPageReady() {
    await expect(this.pageTitle).toBeVisible({
      timeout: 15000,
    });
  }

  async selectCreditCard() {
    await this.creditCardOption.click();
  }

  async clickNext() {
    await this.nextButton.click();
  }
}
