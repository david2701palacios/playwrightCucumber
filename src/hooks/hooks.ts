import {BeforeAll, AfterAll, Before, After, Status, AfterStep} from "@cucumber/cucumber"
import {chromium, Browser, BrowserContext} from "@playwright/test"
import { pageFixture } from "./pageFixture";

let browser : Browser;
let context : BrowserContext; 

BeforeAll(async function () {
    browser = await chromium.launch({headless:false});
});

Before(async function () {
    context =  await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
})

AfterStep(async function ({pickle}) {
    const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"})
    await this.attach(img,"image/png")
})

After(async function({pickle, result}){
    console.log("el resultado es: "+ result?.status);
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"})
        await this.attach(img,"image/png")
    }
    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
})

