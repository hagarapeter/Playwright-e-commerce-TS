import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { CartPage } from "./CartPage";
import { OrdersPage } from "./OrdersPage";
import { OrdersHistoryPage } from "./OrdersHistoryPage";
import { type Page } from "@playwright/test";

export class POManager {
  page: Page;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  cartPage: CartPage;
  ordersPage: OrdersPage;
  ordersHistoryPage: OrdersHistoryPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.ordersPage = new OrdersPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getCartPage() {
    return this.cartPage;
  }

  getOrdersPage() {
    return this.ordersPage;
  }

  getOrdersHistoryPage() {
    return this.ordersHistoryPage;
  }
}
