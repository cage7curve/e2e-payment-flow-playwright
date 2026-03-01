import { test } from "../tests/fixtures/base.fixture";
import { PaymentErrorPopup } from "../pages/components/modal/payment-error.popup";

test.describe("Payment Flow - Receipt Share Page", () => {
  test("should show error popup when paying with invalid test card", async ({
    receiptPage,
    paymentMethodPage,
    creditCardPaymentPage,
    page,
  }) => {
    const popup = new PaymentErrorPopup(page);

    // Arrange
    await receiptPage.gotoReceipt(
      "/api/receipt/share/html/th/jkzzr7vueg6l8j38vrgdq?DoOriginal=1&DoCopies=1",
    );

    // Act
    await receiptPage.clickPay();
    await paymentMethodPage.waitForPageReady();
    await paymentMethodPage.selectCreditCard();
    await paymentMethodPage.clickNext();

    await creditCardPaymentPage.waitForPageReady();
    await creditCardPaymentPage.payWithCard("4242424242424242", "12/30", "123");
   
    // Assert
    await popup.expectErrorVisible();
  });
});
