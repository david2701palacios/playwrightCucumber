import {  When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import {expect} from "@playwright/test"

When('User selected products:', async function (dataTable) {
    for (const element of dataTable.rawTable) {
        await pageFixture.page.locator(`//a[contains(text(),'${element[0]}')]`)
        .click();
        await pageFixture.page.locator("'Add to cart'").click();
        await pageFixture.page.locator("//a[.='Home (current)']").click();
    }
  });

Then('cart contains the products and total value is {string}', async function (value,dataTable) {
    await pageFixture.page.locator("//a[contains(text(),'Cart')]").click();
    await pageFixture.page.waitForLoadState();
    for (const element of dataTable.rawTable) {
        const product = await pageFixture.page.locator(`//td[text()='${element[0]}']`).textContent();
        expect(product).toBe(element[0])
    }
    const totalValue= await pageFixture.page.locator("#totalp").textContent();
    expect(totalValue).toBe(value)
  });