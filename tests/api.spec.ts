
import {test, expect, request} from '@playwright/test'
const API_KEY ='free_user_3HE2Rmb19cz1w3BwMzkdErfZHiT'

test("API testing", async({request}) => {
   const response = await request.get('https://reqres.in/api/users?page=1%27', {
    headers: {
        'x-api-key': API_KEY
    }
   })
    expect(response.status()).toBe(200)
    const jsonData = await response.json()
    console.log(jsonData)
})