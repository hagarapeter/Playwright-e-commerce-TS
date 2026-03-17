import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  page: Page;
  cartProducts: Locator;
  productsText: Locator;
  checkoutBtn: Locator;
  orders: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.checkoutBtn = page.locator("text=Checkout");
    this.orders = page.locator("button[routerlink*='myorders']");
  }

  async verifyItems(productName: string) {
    await this.getProductLocator(productName).waitFor();
    const bool = await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();
  }

  getProductLocator(productName: string) {
    return this.page.locator("h3:has-text('" + productName + "')");
  }

  async checkout() {
    await this.checkoutBtn.click();
  }
}
