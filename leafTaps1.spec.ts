import {test,chromium} from "@playwright/test"
test('create a lead using CSS selectors',async ({page}) => {
await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('[id="username"]').fill('democsr2');
await page.locator('[id="password"]').fill('crmsfa');
await page.locator('[type="submit"]').click();
await page.locator('[class="crmsfa"]').click();
await page.locator('[href="/crmsfa/control/leadsMain"]').click();
await page.locator('[href="/crmsfa/control/createLeadForm"]').click();
await page.locator('#createLeadForm_companyName').fill('ABC Technologies');
await page.locator('#createLeadForm_firstNameLocal').fill('Arun');
await page.locator('#createLeadForm_lastNameLocal').fill('Govindaraju');
await page.locator('#createLeadForm_personalTitle').fill('Mr');
await page.locator('#createLeadForm_generalProfTitle').fill('Manager');
await page.locator('#createLeadForm_annualRevenue').fill('1200000');
await page.locator('#createLeadForm_departmentName').fill('Engineering/IT');
await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567890');
//await page.locator('#createLeadForm_dataSourceId').click();
await page.locator('[class="smallSubmit"]').click();


//const title = await page.title()
//const url = page.url()
//console.log("the title is:",title);
//console.log("the url is :",url);
})
