import request from 'supertest'
import { app } from '../app'

describe('GET/', () => {

  // test ids
  const brand1 = '66462cd6-e43c-4ab6-8e6f-004ca189e4b9'
  const brand0 = '5a4e6d14-53d4-4583-bd6b-49f81b021d24'
  const brand2 = '9e225078-d157-4402-8590-60df83de40d6'
  const lastBrand = '01c25854-6b19-4494-be81-777284b34d2f'

  const productId = "cc46315e-3d4e-482d-adbc-75fbf3a60701"

  //this product is in consolidated array in many brands
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

  describe('products/:brandId', () => {
    it('should return products and consolidated products of brandId', async () => {
      const { body: brand, status } = await request(app).get(`/products/${brand2}`)

      const expResult =
      {
        "products": [
          {
            "id": "14541cf6-8da0-4481-82a6-5296b42e9a12",
            "created_at": "2019-06-07 12:41:18",
            "updated_at": "2019-06-07 13:41:18",
            "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
            "description": "222",
            "campaign": "qa",
            "label": "Potato EPOS QR",
            "internal_name": "",
            "integration": "",
            "price": "2.00",
            "over_18_offer": 0,
            "redemption_instructions": "222",
            "image": "299080936fe938d4e5e799fbef476ae8f96368fe.png",
            "subtitle": "Potato",
            "weight": 98963451,
            "recipient_description": "222",
            "tag_group_id": "",
            "tag_id": "",
            "open_graph_image": "299080936fe938d4e5e799fbef476ae8f96368fe.png",
            "active": 1,
            "on_app": 1,
            "on_imessage": 1,
            "handling_fee": 15,
            "sale_price": 200,
            "huggg_tag": null,
            "vat_voucher_type": "SPV",
            "vat": null,
            "brand_name": "QA Merch EPOS QR",
            "brand_weight": 1010,
            "image_url": "https://test.huggg.me/offers/299080936fe938d4e5e799fbef476ae8f96368fe.png",
            "claim_image": "299080936fe938d4e5e799fbef476ae8f96368fe.png",
            "claim_image_url": "https://test.huggg.me/offers/299080936fe938d4e5e799fbef476ae8f96368fe.png",
            "imessage_image": "299080936fe938d4e5e799fbef476ae8f96368fe.png",
            "imessage_image_url": "https://test.huggg.me/offers/299080936fe938d4e5e799fbef476ae8f96368fe.png",
            "open_graph_image_url": "https://test.huggg.me/offers/299080936fe938d4e5e799fbef476ae8f96368fe.png"
          }
        ],
        "consolidated_products": [
          {
            "id": "26f7a82a-30a8-44e4-93cb-499a256d0ce9",
            "created_at": "2019-06-03 11:15:59",
            "updated_at": "2019-06-03 12:15:59",
            "brand_id": "66462cd6-e43c-4ab6-8e6f-004ca189e4b9",
            "description": "A coffee item from any participating coffee shop.",
            "campaign": null,
            "label": "Coffee",
            "internal_name": "",
            "integration": "",
            "price": "3.00",
            "over_18_offer": 0,
            "redemption_instructions": "Tap in the PIN for the store you're in, then hit 'verify code'.",
            "image": "arf691e013d333fd2272cd66ef26f776122b8cf4c7.png",
            "subtitle": "Bristol, Bath or London",
            "weight": 898481262,
            "recipient_description": "Show to get any coffee type from a participating coffee shop. Check out the map pin for any location-specific exclusions.",
            "tag_group_id": "",
            "tag_id": "",
            "open_graph_image": "ar654462ca242198ab9bedde58baa19a88a51b0601.png",
            "active": 1,
            "on_app": 1,
            "on_imessage": 1,
            "handling_fee": 20,
            "sale_price": 300,
            "huggg_tag": null,
            "vat_voucher_type": "SPV",
            "vat": null,
            "brand_name": "independent coffee locations",
            "brand_weight": 1080,
            "image_url": "https://test.huggg.me/offers/arf691e013d333fd2272cd66ef26f776122b8cf4c7.png",
            "claim_image": "arf691e013d333fd2272cd66ef26f776122b8cf4c7.png",
            "claim_image_url": "https://test.huggg.me/offers/arf691e013d333fd2272cd66ef26f776122b8cf4c7.png",
            "imessage_image": "arf691e013d333fd2272cd66ef26f776122b8cf4c7.png",
            "imessage_image_url": "https://test.huggg.me/offers/arf691e013d333fd2272cd66ef26f776122b8cf4c7.png",
            "open_graph_image_url": "https://test.huggg.me/offers/ar654462ca242198ab9bedde58baa19a88a51b0601.png",
            "pivot": {
              "brand_id": "01c25854-6b19-4494-be81-777284b34d2f",
              "price_id": "26f7a82a-30a8-44e4-93cb-499a256d0ce9"
            }
          }
        ]
      }

      expect(brand).toEqual(expResult)
      expect(status).toEqual(200)
    })


    it('should return empty array of products if brand doesnt exist for a products', async () => {
      const { body: products, status } = await request(app).get(`/products/3-2021-09-12`)

      expect(products).toEqual({ "products": [] })
      expect(status).toEqual(200)
    })

  })


  describe('brand/stores/:brandId', () => {
    it('should return products and consolidated products of brandId', async () => {
      const { body: brand, status } = await request(app).get(`/brand/stores/${brand2}`)

      const expResult =
      {
        "stores": [
          {
            "id": "3150a400-7303-4c89-b3b7-bca34a02d904",
            "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
            "latitiude": "51.456421",
            "longitude": "-2.593695",
            "website": "",
            "name": "Site 1",
            "description": "",
            "visible": 1,
            "description_markdown": "",
            "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "latitude": "51.456421"
          },
          {
            "id": "405e9503-6509-480d-92e9-3b7bf4877234",
            "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
            "latitiude": "51.478421",
            "longitude": "",
            "website": "",
            "name": "",
            "description": "",
            "visible": 1,
            "description_markdown": "",
            "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "latitude": "51.478421"
          },
          {
            "id": "69468043-2775-4620-bccb-7ca21b58bb9a",
            "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
            "latitiude": "51.4565",
            "longitude": "-2.598695",
            "website": "",
            "name": "Site 2",
            "description": "",
            "visible": 1,
            "description_markdown": "",
            "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "latitude": "51.4565"
          },
          {
            "id": "97942c11-269b-4d91-bec0-d33f9ae1a63a",
            "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
            "latitiude": "51.478421",
            "longitude": "-2.693695",
            "website": "",
            "name": "Site 3",
            "description": "",
            "visible": 1,
            "description_markdown": "",
            "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "latitude": "51.478421"
          },
          {
            "id": "aeffb0a6-de20-4874-88b6-06a1c6241a6a",
            "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
            "latitiude": "51.449890",
            "longitude": "-2.581013",
            "website": null,
            "name": "Bristol Station",
            "description": "This is Bristol Station",
            "visible": 1,
            "description_markdown": "",
            "image": "74d11be7862369713bb39a2a3502d6dd1fc8d206.png",
            "image_url": "https://test.huggg.me/locations/74d11be7862369713bb39a2a3502d6dd1fc8d206.png",
            "latitude": "51.449890"
          },
          {
            "id": "e3e6dbef-e723-4b09-bac9-89759eb6e7df",
            "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
            "latitiude": "51.478421",
            "longitude": "",
            "website": "",
            "name": "Site 4",
            "description": "",
            "visible": 1,
            "description_markdown": "",
            "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
            "latitude": "51.478421"
          }
        ]
      }

      expect(brand).toEqual(expResult)
      expect(status).toEqual(200)
    })


    it('should return empty array of products if brand doesnt exist for a products', async () => {
      const { body: products, status } = await request(app).get(`/brand/stores/3-2021-09-12`)

      expect(products).toEqual({ "stores": [] })
      expect(status).toEqual(200)
    })

  })


  describe('/product/stores/:productId', () => {
    it('should return all stores and all associated stored by productId', async () => {
      const { body: brand, status } = await request(app).get(`/product/stores/${consolPro}`)

      const expResult = [
        {
          "id": "1236a970-8e75-4c35-8aa6-1e37e204f334",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.504108",
          "longitude": "-0.114614",
          "website": null,
          "name": "Crosstown Doughnuts (Waterloo)",
          "description": "Does not accept Coffee Anywhere. Fresh handcrafted doughnuts.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.504108"
        },
        {
          "id": "1d65fd4e-8af3-432c-88bf-afc22e2aff70",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.534608",
          "longitude": "-0.048066",
          "website": null,
          "name": "Vegan Crosstown Doughnuts (Victoria Park Market)",
          "description": "Does not accept Coffee Anywhere. Open Sun 10:00-16:00 only.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.534608"
        },
        {
          "id": "267878a5-3e70-4abb-938a-21136178f76f",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.481449",
          "longitude": "-0.009355",
          "website": null,
          "name": "Crosstown Doughnuts (Greenwich)",
          "description": "Fresh handcrafted doughnuts and coffee.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.481449"
        },
        {
          "id": "3b1a5315-6b82-4a3b-9c80-ebcb02939438",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.467928",
          "longitude": "-0.024699",
          "website": null,
          "name": "Vegan Crosstown Doughnuts (Brockley Market)",
          "description": "Does not accept Coffee Anywhere. Open Sat 10:00-14:00 only.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.467928"
        },
        {
          "id": "44d7d2e4-4450-4891-88c6-3cb7211650a3",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.537452",
          "longitude": "-0.061027",
          "website": null,
          "name": "Crosstown Doughnuts (Broadway Market)",
          "description": "Does not accept Coffee Anywhere. Open Sat 10:00-16:00 only.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.537452"
        },
        {
          "id": "667991b0-94fe-4cbd-ac15-4ce18430f647",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.520136",
          "longitude": "-0.075905",
          "website": null,
          "name": "Crosstown Doughnuts (Spitalfields)",
          "description": "Does not accept Coffee Anywhere. Open Mon-Fri 09:30-18:00, Sat 10:30-17:00, Sun 10:00-17:00.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.520136"
        },
        {
          "id": "6836e358-8725-41bc-8058-028ea3382f9a",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.529894",
          "longitude": "-0.124955",
          "website": null,
          "name": "Crosstown Doughnuts (Real Food Market Kings Cross)",
          "description": "Does not accept Coffee Anywhere. Open Wed-Fri 08:00-19:00 only.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.529894"
        },
        {
          "id": "9632e80b-81c1-40fa-a062-8cc7f3674dd2",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.511563",
          "longitude": "-0.088965",
          "website": null,
          "name": "Crosstown Doughnuts (City)",
          "description": "Open Mon-Fri 07:00-19:00 or until sold out.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.511563"
        },
        {
          "id": "99c71149-0bcc-49f2-b173-c3f41103d0a5",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.517031",
          "longitude": "-0.134997",
          "website": null,
          "name": "Crosstown Doughnuts (Fitzrovia)",
          "description": "Open Mon-Fri 08:00-18:00 or until sold out.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.517031"
        },
        {
          "id": "9a9903e8-dbe5-4613-8d7f-d7d3806b5e51",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.497314",
          "longitude": "-0.143840",
          "website": null,
          "name": "Crosstown Doughnuts (Victoria)",
          "description": "Fresh handcrafted doughnuts and coffee.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.497314"
        },
        {
          "id": "9f829adf-7740-4e6e-b65c-45219a6501de",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.514085",
          "longitude": "-0.134652",
          "website": null,
          "name": "Crosstown Doughnuts (Soho)",
          "description": "Fresh handcrafted doughnuts and coffee.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.514085"
        },
        {
          "id": "b53fba4c-d7aa-4d31-8c48-f19750710a05",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.515426",
          "longitude": "-0.151485",
          "website": null,
          "name": "Vegan Crosstown Doughnuts (Marylebone)",
          "description": "Fresh handcrafted doughnuts and coffee.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.515426"
        },
        {
          "id": "e38bcad3-5c6d-489a-83ca-759e282bff87",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.492815",
          "longitude": "-0.224294",
          "website": null,
          "name": "Crosstown Doughnuts (Hammersmith)",
          "description": "Does not accept Coffee Anywhere. Fresh handcrafted doughnuts.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.492815"
        },
        {
          "id": "ed056404-f07d-4706-b776-f7a068d0fad4",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.521650",
          "longitude": "-0.110400",
          "website": null,
          "name": "Crosstown Doughnuts (Leather Lane Market)",
          "description": "Does not accept Coffee Anywhere. Open Fri 10:00-14:00 only.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.521650"
        },
        {
          "id": "f16f353a-a280-4806-a43e-5513b8871799",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.524436",
          "longitude": "-0.071681",
          "website": null,
          "name": "Crosstown Doughnuts (Shoreditch)",
          "description": "Fresh handcrafted doughnuts and coffee.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.524436"
        },
        {
          "id": "f7d95965-5a4f-46ed-a815-8fce6172654b",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.509235",
          "longitude": "-0.137134",
          "website": null,
          "name": "Crosstown Doughnuts (Piccadilly)",
          "description": "Fresh handcrafted doughnuts and coffee.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.509235"
        },
        {
          "id": "120cad4a-d5ed-4e69-9619-193943518a64",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.514858",
          "longitude": "-0.097494",
          "website": null,
          "name": "Taylor St. Baristas (St Paul's)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.514858"
        },
        {
          "id": "4b88a907-25a2-42fe-9fde-4b8c82bad72b",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.498702",
          "longitude": "-0.014568",
          "website": null,
          "name": "Taylor St. Baristas (South Quay)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.498702"
        },
        {
          "id": "57dcdd98-34fb-49e8-b046-ecd03ddade6a",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.523927",
          "longitude": "-0.082344",
          "website": null,
          "name": "Taylor St. Baristas (Shoreditch)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.523927"
        },
        {
          "id": "70ef8cf6-f96d-41e6-9993-e2b38a46654a",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.504774",
          "longitude": "-0.021916",
          "website": null,
          "name": "Taylor St. Baristas (Canary Wharf)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.504774"
        },
        {
          "id": "9924e2b4-4a98-4c40-a0f1-bf3325be661e",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.517443",
          "longitude": "-0.079998",
          "website": null,
          "name": "Taylor St. Baristas (Liverpool St)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.517443"
        },
        {
          "id": "b98bac59-72ba-46ae-ad2e-eaae1cad7a7b",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.514539",
          "longitude": "-0.086422",
          "website": null,
          "name": "Taylor St. Baristas (Bank)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.514539"
        },
        {
          "id": "bcace9a2-c850-46fd-9902-28abde12de2d",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.510182",
          "longitude": "-0.084288",
          "website": null,
          "name": "Taylor St. Baristas (Monument)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.510182"
        },
        {
          "id": "e13b68c7-1e67-4c9f-a64d-202d6896de46",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.512207",
          "longitude": "-0.147240",
          "website": null,
          "name": "Taylor St. Baristas (Mayfair)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.512207"
        },
        {
          "id": "f26e4aca-17ea-47ca-8b10-5e9964552c5a",
          "brand_id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
          "latitiude": "51.517473",
          "longitude": "-0.112016",
          "website": null,
          "name": "Taylor St. Baristas (Chancery Lane)",
          "description": "Artisan coffee at its best.",
          "visible": 1,
          "description_markdown": "",
          "image": "are11946747092e3cac7f0f62755270f761620cc22.png",
          "image_url": "https://cdn.huggg.me/locations/are11946747092e3cac7f0f62755270f761620cc22.png",
          "latitude": "51.517473"
        },
        {
          "id": "ba87c0e6-82a4-411f-9014-7ad0a68ac5f4",
          "brand_id": "1f93dfab-8c4e-405a-95cc-c14c01a68773",
          "latitiude": "51.511131",
          "longitude": "-0.126505",
          "website": null,
          "name": "Espresso Room (Covent Garden)",
          "description": "Specialty coffee and homemade cakes.",
          "visible": 1,
          "description_markdown": "",
          "image": "arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "image_url": "https://cdn.huggg.me/locations/arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "latitude": "51.511131"
        },
        {
          "id": "ee65e122-8209-4bfa-8e61-f02d70b88416",
          "brand_id": "1f93dfab-8c4e-405a-95cc-c14c01a68773",
          "latitiude": "51.5218808",
          "longitude": "-0.1203722",
          "website": null,
          "name": "Espresso Room (Bloomsbury)",
          "description": "Specialty coffee and homemade cakes.",
          "visible": 1,
          "description_markdown": "",
          "image": "arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "image_url": "https://cdn.huggg.me/locations/arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "latitude": "51.5218808"
        },
        {
          "id": "f74a4871-d82c-414d-8885-050a8b61d29e",
          "brand_id": "1f93dfab-8c4e-405a-95cc-c14c01a68773",
          "latitiude": "51.516757",
          "longitude": "-0.118965",
          "website": null,
          "name": "Espresso Room (Holborn)",
          "description": "Specialty coffee and homemade cakes.",
          "visible": 1,
          "description_markdown": "",
          "image": "arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "image_url": "https://cdn.huggg.me/locations/arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "latitude": "51.516757"
        },
        {
          "id": "fa8eda05-5acb-48d8-9cb3-3feb3da6241a",
          "brand_id": "1f93dfab-8c4e-405a-95cc-c14c01a68773",
          "latitiude": "51.51829",
          "longitude": "-0.120933",
          "website": null,
          "name": "Espresso Room (Southampton Row)",
          "description": "Specialty coffee and homemade cakes.",
          "visible": 1,
          "description_markdown": "",
          "image": "arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "image_url": "https://cdn.huggg.me/locations/arc6786fbc6d819b0b92a31dd6fb985a9ef0cda747.png",
          "latitude": "51.51829"
        },
        {
          "id": "569d9684-341a-4ad8-bc33-d35b1fc543ed",
          "brand_id": "160edae7-e35c-443b-80f4-88bfd7d171d5",
          "latitiude": "51.497991",
          "longitude": "-0.081319",
          "website": null,
          "name": "The Watch House (Bermondsey Street)",
          "description": "Speciality coffee and homemade food.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar2d2a829637ce7efcbc5b63a2871c10588cd57055.png",
          "image_url": "https://cdn.huggg.me/locations/ar2d2a829637ce7efcbc5b63a2871c10588cd57055.png",
          "latitude": "51.497991"
        },
        {
          "id": "7c24eeac-cead-4179-9c02-776a738c3ced",
          "brand_id": "160edae7-e35c-443b-80f4-88bfd7d171d5",
          "latitiude": "51.516789",
          "longitude": "-0.109191",
          "website": null,
          "name": "The Watch House (Fetter Lane)",
          "description": "Speciality coffee and homemade food.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar2d2a829637ce7efcbc5b63a2871c10588cd57055.png",
          "image_url": "https://cdn.huggg.me/locations/ar2d2a829637ce7efcbc5b63a2871c10588cd57055.png",
          "latitude": "51.516789"
        },
        {
          "id": "e55a7cf5-950b-45e1-ab26-a3cd4cf26189",
          "brand_id": "160edae7-e35c-443b-80f4-88bfd7d171d5",
          "latitiude": "51.503441",
          "longitude": "-0.073702",
          "website": null,
          "name": "The Watch House (Tower Bridge)",
          "description": "Speciality coffee and homemade food.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar2d2a829637ce7efcbc5b63a2871c10588cd57055.png",
          "image_url": "https://cdn.huggg.me/locations/ar2d2a829637ce7efcbc5b63a2871c10588cd57055.png",
          "latitude": "51.503441"
        },
        {
          "id": "ea7000e3-ad1b-4309-9fb4-6d35c0b9b4c4",
          "brand_id": "15538f17-95bd-4cc4-9cf3-893a21d16028",
          "latitiude": "51.449891",
          "longitude": "-2.3572502",
          "website": null,
          "name": "Bristol Station",
          "description": "",
          "visible": 1,
          "description_markdown": "**Bristol Station Marker**\n\nHas it's own description! \n\n😲",
          "image": "74d11be7862369713bb39a2a3502d6dd1fc8d206.png",
          "image_url": "https://test.huggg.me/locations/74d11be7862369713bb39a2a3502d6dd1fc8d206.png",
          "latitude": "51.449891"
        },
        {
          "id": "391f749b-99d0-4dd7-9dd2-e6d130cadb06",
          "brand_id": "6fa700c8-4367-43b0-8b79-dc6f2e58901b",
          "latitiude": "51.449890",
          "longitude": "-2.3572502",
          "website": null,
          "name": "Bristol Station",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "18990049d3f6dccea359fa4527c9e42685589178.png",
          "image_url": "https://test.huggg.me/locations/18990049d3f6dccea359fa4527c9e42685589178.png",
          "latitude": "51.449890"
        },
        {
          "id": "3150a400-7303-4c89-b3b7-bca34a02d904",
          "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
          "latitiude": "51.456421",
          "longitude": "-2.593695",
          "website": "",
          "name": "Site 1",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "latitude": "51.456421"
        },
        {
          "id": "405e9503-6509-480d-92e9-3b7bf4877234",
          "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
          "latitiude": "51.478421",
          "longitude": "",
          "website": "",
          "name": "",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "latitude": "51.478421"
        },
        {
          "id": "69468043-2775-4620-bccb-7ca21b58bb9a",
          "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
          "latitiude": "51.4565",
          "longitude": "-2.598695",
          "website": "",
          "name": "Site 2",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "latitude": "51.4565"
        },
        {
          "id": "97942c11-269b-4d91-bec0-d33f9ae1a63a",
          "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
          "latitiude": "51.478421",
          "longitude": "-2.693695",
          "website": "",
          "name": "Site 3",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "latitude": "51.478421"
        },
        {
          "id": "aeffb0a6-de20-4874-88b6-06a1c6241a6a",
          "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
          "latitiude": "51.449890",
          "longitude": "-2.581013",
          "website": null,
          "name": "Bristol Station",
          "description": "This is Bristol Station",
          "visible": 1,
          "description_markdown": "",
          "image": "74d11be7862369713bb39a2a3502d6dd1fc8d206.png",
          "image_url": "https://test.huggg.me/locations/74d11be7862369713bb39a2a3502d6dd1fc8d206.png",
          "latitude": "51.449890"
        },
        {
          "id": "e3e6dbef-e723-4b09-bac9-89759eb6e7df",
          "brand_id": "9e225078-d157-4402-8590-60df83de40d6",
          "latitiude": "51.478421",
          "longitude": "",
          "website": "",
          "name": "Site 4",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "image_url": "https://test.huggg.me/locations/4d031ba0d8058e1a041c5b6d2376baad0e0f9749.png",
          "latitude": "51.478421"
        },
        {
          "id": "a3d3809f-fb76-4720-aa38-ca7bcaeacdd2",
          "brand_id": "32111cd0-db1d-4314-bfd2-619421249b41",
          "latitiude": "51.446896",
          "longitude": "-2.599165",
          "website": null,
          "name": "The Juice Box",
          "description": "Cold pressed juice and coffee.",
          "visible": 1,
          "description_markdown": "",
          "image": "ard466d7f7c2e71a8eea6f8b9a03413e8a2601c594.png",
          "image_url": "https://cdn.huggg.me/locations/ard466d7f7c2e71a8eea6f8b9a03413e8a2601c594.png",
          "latitude": "51.446896"
        },
        {
          "id": "26fe095b-e759-4026-bcc2-9ef046e65416",
          "brand_id": "1bb152d8-e912-46d4-a40d-c4eeeeb3cca0",
          "latitiude": "51.462946",
          "longitude": "-0.169989",
          "website": null,
          "name": "Story Works",
          "description": "Speciality Coffee and all day brunch.",
          "visible": 1,
          "description_markdown": "",
          "image": "arc1dbe2202a5a080987e020ff8d8b792779acdeac.png",
          "image_url": "https://cdn.huggg.me/locations/arc1dbe2202a5a080987e020ff8d8b792779acdeac.png",
          "latitude": "51.462946"
        },
        {
          "id": "4ffec9a1-7cdc-444c-982f-0fda2f7d0d01",
          "brand_id": "1bb152d8-e912-46d4-a40d-c4eeeeb3cca0",
          "latitiude": "51.461029",
          "longitude": "-0.174411",
          "website": null,
          "name": "Story Coffee",
          "description": "Speciality Coffee and all day brunch.",
          "visible": 1,
          "description_markdown": "",
          "image": "arc1dbe2202a5a080987e020ff8d8b792779acdeac.png",
          "image_url": "https://cdn.huggg.me/locations/arc1dbe2202a5a080987e020ff8d8b792779acdeac.png",
          "latitude": "51.461029"
        },
        {
          "id": "26d3b556-0160-48b2-99e5-d313e46f5ef0",
          "brand_id": "1b9f5fae-4e2e-429c-9372-940022473129",
          "latitiude": "51.381520",
          "longitude": "-2.363325",
          "website": null,
          "name": "Swoon Gelato",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "arbc78d5a4541e1fbd69ac9b0d3a9673b834108b81.png",
          "image_url": "https://cdn.huggg.me/locations/arbc78d5a4541e1fbd69ac9b0d3a9673b834108b81.png",
          "latitude": "51.381520"
        },
        {
          "id": "892beff3-c85b-44ba-855c-e2066f23a7fa",
          "brand_id": "1b9f5fae-4e2e-429c-9372-940022473129",
          "latitiude": "51.452753",
          "longitude": "-2.600043",
          "website": null,
          "name": "Swoon Gelato",
          "description": "",
          "visible": 1,
          "description_markdown": "",
          "image": "arbc78d5a4541e1fbd69ac9b0d3a9673b834108b81.png",
          "image_url": "https://cdn.huggg.me/locations/arbc78d5a4541e1fbd69ac9b0d3a9673b834108b81.png",
          "latitude": "51.452753"
        },
        {
          "id": "820d2c40-8ee1-4853-9865-45edaee1f1c8",
          "brand_id": "01c25854-6b19-4494-be81-777284b34d2f",
          "latitiude": "51.462836",
          "longitude": "-0.108781",
          "website": null,
          "name": "CAYA Club",
          "description": "Brixton coffee shop and co-working space.",
          "visible": 1,
          "description_markdown": "",
          "image": "ardf1fdef8f45a2068164839a2895e4841fba2a750.png",
          "image_url": "https://cdn.huggg.me/locations/ardf1fdef8f45a2068164839a2895e4841fba2a750.png",
          "latitude": "51.462836"
        }
      ]

      expect(brand).toEqual(expResult)
      expect(status).toEqual(200)
    })


    it('should return non existent id message', async () => {
      const { body: products, status } = await request(app).get(`/product/stores/3-2021-09-12`)

      expect(products).toEqual(`Product with ID: 3-2021-09-12 does not exist`)
      expect(status).toEqual(404)
    })

  })

})