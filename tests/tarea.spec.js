// @ts-check
const { test, expect } = require('@playwright/test');

test('hacer compra', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com');

  
  await page.locator('input[@id="maincontent"]').click();
  await page.locator('input[@id="option-label-size-143-item-166"]').click();
  await page.locator('input[@id="product-addtocart-button"]').click();

  //*[@id="product-addtocart-button"]
});
