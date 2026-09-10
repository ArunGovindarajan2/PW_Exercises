import {test,chromium} from "@playwright/test"
test('launch the browser and open salesforce',async ({page}) => {
//await page.goto("https://login.salesforce.com/?locale=in/")
await page.goto("https://login.salesforce.com/");
await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('[id="Login"]').click();
await page.locator('[id="password"]').fill('TestLeaf@2025');
await page.locator('[id="Login"]').click();
const title = await page.title()
const url = page.url()
//await page.waitForLoadState('load');
//await page.waitForLoadState('networkidle');
console.log("the title is:",title);
console.log("the url is :",url);
})