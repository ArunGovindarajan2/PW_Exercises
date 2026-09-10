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
//await page.locator('[class="smallSubmit"]').click();


//all dropdown values
let ddvalues=page.locator('#createLeadForm_dataSourceId>option')

//dropdown count
let ddcount=await ddvalues.count()
console.log(ddcount);

//for loop -> used for iteration

for (let index = 0; index < ddcount; index++) {
    
console.log(await ddvalues.nth(index).innerText());

}

})