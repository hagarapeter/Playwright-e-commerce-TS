import { test, expect } from "@playwright/test";
import { customTest } from "../utils/test-base";
import { POManager } from "../pageobjects/POManager";
import dataset from "../utils/placeorderTestData.json" with { type: "json" };

for (const data of dataset) {
  test(`@Web Client App login for ${data.productName}`, async ({ page }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.verifyItems(data.productName);
    await cartPage.checkout();

    const ordersPage = poManager.getOrdersPage();
    await ordersPage.searchCountryAndSelect("ind", "India");
    let orderId: any;
    orderId = await ordersPage.submitAndGetOrderId();
    console.log(orderId);

    await dashboardPage.navigateToOrders();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  });
}

customTest(`Client App login`, async ({ page, testDataForOrder }) => {
  const poManager = new POManager(page);

  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(
    testDataForOrder.username,
    testDataForOrder.password,
  );

  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.verifyItems(testDataForOrder.productName);
  await cartPage.checkout();
});
