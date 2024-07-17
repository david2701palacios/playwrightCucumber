import { Given, When, Then, After } from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";


Given("User navigates to the application", async function () {
  await pageFixture.page.goto("https://www.demoblaze.com/");
});

Given("User click on the login link", async function () {
  await pageFixture.page.locator("//a[contains(text(),'Log in')]").click();
});

Given("User enter the username as {string}", async function (username) {
  await pageFixture.page.locator("id=loginusername").fill(username);
});

Given("User enter the password as {string}", async function (password) {
  await pageFixture.page.locator("#loginpassword").fill(password);
});

When("User click on the login button", async function () {
  await pageFixture.page.locator("//button[text()='Log in']").click();
});

Then("Login should be {string}", async function (output) {
  if (output == "success") {
    await pageFixture.page.waitForSelector("#nameofuser", { state: 'visible' });
    const textUser = await pageFixture.page.locator("#nameofuser").textContent();
    expect(textUser).toBe("Welcome test")
  }else{
    await pageFixture.page.on('dialog', dialog => 
      expect(dialog.message()).toBe("Wrong password.")
     );
  }
});