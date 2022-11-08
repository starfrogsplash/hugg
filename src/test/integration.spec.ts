import request from 'supertest'
import { app } from '../app'

describe('GET/', () => {

    afterEach(async () => {
      jest.resetAllMocks()
    })

    describe('brand/:brandId', () => {
      it('should brand of id', async () => {
        const { body: brand, status } = await request(app).get(`/brand/3-2021-09-12`)

        const expResult = {
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