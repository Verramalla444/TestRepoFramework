import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { CartPage } from '../Pages/cartPage';
import data from '../testdata/login.json';
import cartData from '../testdata/cart.json';

let lp: LoginPage
let cp: CartPage

test.beforeEach(`cart scenario`, async ({page}) => {
    lp = new LoginPage(page)
    cp = new CartPage(page)
    await page.goto(data.url, {waitUntil: "domcontentloaded"})
})

test(`Add product to cart`, async ({page}) => {
    await lp.loginIntoApplication(data.email, data.password)
    await cp.addProductToCart(cartData.productName)
    await page.locator('[routerlink="/dashboard/cart"]').click()

    await expect(cp.cartItemNames.filter({hasText: cartData.productName})).toBeVisible()
    await cp.proceedToCheckout()
})
