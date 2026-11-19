
import {test, expect, request} from '@playwright/test'
const API_KEY =''

test("API testing", async({request}) => {
   const response = await request.get('', {
    headers: {
        'x-api-key': API_KEY
    }
   })
    expect(response.status()).toBe(200)
    const jsonData = await response.json()
    console.log(jsonData)
})