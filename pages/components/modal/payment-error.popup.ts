import { Page, Locator, expect } from "@playwright/test";

export class PaymentErrorPopup {
  readonly container;
  readonly title;
  readonly description;

  constructor(private page: Page) {
    this.container = page.locator(".swal2-popup");
    this.title = this.container.locator(".paynow-popup-title");
    this.description = this.container.locator(".paynow-popup-description");
  }

  async expectErrorVisible() {
    await expect(this.container).toBeVisible();

    await expect(this.title).toHaveText(
      "รายการนี้ไม่สามารถชำระเงินได้",
      { useInnerText: true }
    );

    await expect(this.description).toHaveText(
      "กรุณาติดต่อผู้ขาย หรือผู้ให้บริการเพื่อทำรายการใหม่อีกครั้ง",
      { useInnerText: true }
    );
  }
}
