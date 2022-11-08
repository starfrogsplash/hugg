import request from 'supertest'
import { app } from '../app'

describe('GET/', () => {

  // test ids
const brand1 = '66462cd6-e43c-4ab6-8e6f-004ca189e4b9'
const brand0 = '5a4e6d14-53d4-4583-bd6b-49f81b021d24'
const brand2 = '9e225078-d157-4402-8590-60df83de40d6'
const lastBrand = '01c25854-6b19-4494-be81-777284b34d2f'

const productId = "cc46315e-3d4e-482d-adbc-75fbf3a60701"

//this product is in  consolidated array in many brands
const consolPro = "26f7a82a-30a8-44e4-93cb-499a256d0ce9"

    afterEach(async () => {
      jest.resetAllMocks()
    })

    describe('brand/:brandId', () => {
      it('should brand of id', async () => {
        const { body: brand, status } = await request(app).get(`/brand/${brand2}`)

        const expResult = 
          {
            "id": "9e225078-d157-4402-8590-60df83de40d6",
            "created_at": "2019-05-01 10:31:16",
            "updated_at": "2019-06-07 13:40:48",
            "name": "QA Merch EPOS QR",
            "internal_name": "",
            "logo": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "colour": "",
            "success": "You top human, you. \nBig question is... who gets your next one?",
            "share": "I'm using @huggg_uk to send my friends & family a little surprise pick me up! Download and send a huggg too @ api.huggg.me/download",
            "weight": 1010,
            "deleted_at": null,
            "expiry": 365,
            "website": null,
            "integration_id": 5,
            "user_id": "",
            "email": "anthony@huggg.me",
            "vat": 20,
            "faq": null,
            "description": "",
            "redeem": null,
            "location_text": null,
            "map_pin_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "consolidated": 0,
            "default_location_description_markdown": "",
            "products": [
              "14541cf6-8da0-4481-82a6-5296b42e9a12"
            ],
            "consolidated_products": [
              "26f7a82a-30a8-44e4-93cb-499a256d0ce9"
            ],
            "stores": [
              "3150a400-7303-4c89-b3b7-bca34a02d904",
              "405e9503-6509-480d-92e9-3b7bf4877234",
              "69468043-2775-4620-bccb-7ca21b58bb9a",
              "97942c11-269b-4d91-bec0-d33f9ae1a63a",
              "aeffb0a6-de20-4874-88b6-06a1c6241a6a",
              "e3e6dbef-e723-4b09-bac9-89759eb6e7df"
            ],
            "logo_url": "https://test.huggg.me/brands/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png"
          }

        expect(brand).toEqual(expResult)
        expect(status).toEqual(200)
      })


      it('should return empty', async () => {
        const { body: brand, status } = await request(app).get(`/brand/3-2021-09-12`)

        expect(brand).toEqual("not found")
        expect(status).toEqual(404)
      })

    })

  })