import { test as baseTest } from "@playwright/test";
interface testDataForOrder {
  username: string;
  password: string;
  productName: string;
}

export const customTest = baseTest.extend<{
  testDataForOrder: testDataForOrder;
}>({
  testDataForOrder: {
    username: "peter@peter.peter",
    password: "Qwerty12",
    productName: "iphone 13 pro",
  },
});
