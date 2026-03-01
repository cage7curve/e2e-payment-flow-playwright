import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ReceiptPage extends BasePage {
  readonly payButton = this.page.getByRole("button", {
    name: "ชำระเงิน",
  });

  constructor(page: Page) {
    super(page);
  }

  async gotoReceipt(path: string) {
  await this.page.goto(path);
}

  async clickPay() {
    await this.payButton.click();
  }
}
