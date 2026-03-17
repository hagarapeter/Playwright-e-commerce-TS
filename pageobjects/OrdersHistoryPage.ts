import { type Locator, type Page } from "@playwright/test";

export class OrdersHistoryPage {
  page: Page;
  ordersTable: Locator;
  rows: Locator;
  ordersIdDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ordersTable = page.locator("tbody");
    this.rows = page.locator("tbody tr");
    this.ordersIdDetails = page.locator(".col-text");
  }

  async searchOrderAndSelect(orderId: any) {
    await this.ordersTable.waitFor();
    for (let i = 0; i < (await this.rows.count()); ++i) {
      const orderRow = await this.rows.nth(i).locator("th").textContent();
      if (String(orderId).includes(String(orderRow))) {
        await this.rows.nth(i).locator("button").first().click();
        break;
      }
    }
  }

  async getOrderId() {
    return await this.ordersIdDetails.textContent();
  }
}
