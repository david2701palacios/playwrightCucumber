import {BeforeAll, AfterAll, Before, After, Status, AfterStep} from "@cucumber/cucumber"
import { Browser, BrowserContext} from "@playwright/test"
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
const fs = require('fs');
const os = require('os');

let browser : Browser;
let context : BrowserContext; 

BeforeAll(async function () {
    getEnv()
    browser = await invokeBrowser();
});

Before(async function () {
    context =  await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
})

AfterStep(async function ({pickle}) {
    const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"})
    this.attach(img, "image/png")
})

After(async function({pickle, result}){
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"})
         this.attach(img,"image/png")
    }
     await pageFixture.page.close();
     await context.close();
})

AfterAll(async function () {
    browser.close();
    const metadata = {
        "App Url": process.env.BASEURL,
        "Test Environment": process.env.ENV,
        "Browser": process.env.BROWSER,
        "Platform": os.version(),
        "Parallel": "Scenarios",
        "Executed": "Remote"
    };
    fs.writeFileSync('./test-results/metadata.json', JSON.stringify(metadata, null, 2));
})

