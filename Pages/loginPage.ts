// This file consists of only locators & methods of login page.

import {Locator, Page} from "@playwright/test"

 export class LoginPage{
    //provide all propertie of login page inside this class
    page: Page
    email: Locator
    password : Locator
    loginButton : Locator
    errorMessage : Locator
    homePageIdentifier: Locator

    constructor(page:Page){
        this.page = page
        this.email = this.page.locator("#userEmail")
        this.password = this.page.locator("#userPassword")
        this.loginButton = this.page.locator('#login')
        this.errorMessage = this.page.locator('#toast-container')
        this.homePageIdentifier =  this.page.locator('[routerlink="/dashboard/"]')
    }

    //actions goes inside method
    async launchUrl(url:string){
        await this.page.goto(url)
    }
    async loginIntoApplication(username:string, password:string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

}