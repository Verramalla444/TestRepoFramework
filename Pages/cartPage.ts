// This file consists only of locators & methods of the cart page.

import {Locator, Page} from "@playwright/test"

export class CartPage{
    // provide all properties of cart page inside this class
    page: Page
    productCards: Locator
    cartPageIdentifier: Locator
    cartItems: Locator
    cartItemNames: Locator
    removeButtons: Locator
    checkoutButton: Locator

    constructor(page:Page){
        this.page = page
        this.productCards = this.page.locator(".card-body")
        this.cartPageIdentifier = this.page.getByRole("heading", {name: "My Cart"})
        this.cartItems = this.page.locator(".cartSection")
        this.cartItemNames = this.page.locator(".cartSection h3")
        this.removeButtons = this.page.getByRole("button", {name: "Remove"})
        this.checkoutButton = this.page.getByRole("button", {name: "Checkout"})
    }

    // actions go inside methods
    async launchUrl(url:string){
        await this.page.goto(url)
    }

    async addProductToCart(productName:string){
        const productCard = this.productCards.filter({hasText: productName})
        await productCard.getByRole("button", {name: "Add To Cart"}).click()
    }

    async removeProductFromCart(productIndex:number = 0){
        await this.removeButtons.nth(productIndex).click()
    }

    async proceedToCheckout(){
        await this.checkoutButton.click()
    }
}
