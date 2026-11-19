import { test, expect  } from '@playwright/test';
import {LoginPage} from '../Pages/loginPage';
import  data  from '../testdata/login.json';


let lp:LoginPage 

test.beforeEach(`login scenario`, async({page})=>
{
    lp = new LoginPage(page)
    await lp.launchUrl(data.url)
})

test(`Valid login scenario`, async({page})=> {
    await lp.loginIntoApplication(data.email, data.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test(`Invalid login scenario`, async({page})=> {
    await lp.loginIntoApplication(data.email, data.invalidPassword)
    await expect(lp.errorMessage).toBeVisible()
})

