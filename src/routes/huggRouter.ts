import { Router } from "express";
import { cache } from '../utils/cache';
import {
    getByBrandId,
    getAllproductsByBrandId,
    getAllstoresByBrandId,
    getAllstoresByproductId
} from '../controllers/huggControllers'

const huggRouter = Router()

huggRouter.get('/', (req, res) => res.status(200).send('hugg: v1'))

huggRouter.get('/brand/:brandId', (req, res) => {
    const { brandId } = req.params
    const cachedData = cache.get(`${brandId}`)

    if (!cachedData) {
        try {
            const foundData = getByBrandId(brandId)
            cache.set(`${brandId}`, foundData)
            if (foundData) {
                return res.status(200).json(foundData)
            } else {
                return res.status(404).json('not found')
            }

        } catch (error) {
            res.status(400).json('retrieve failed')
        }
    }

    res.status(200).json(cachedData)
})

huggRouter.get('/products/:brandId', async (req, res) => {
    const { brandId } = req.params
    const cacheName = `allproductsByBrand-${brandId}`
    const cachedData = cache.get(cacheName)

    if (!cachedData) {
        try {
            const foundData = getAllproductsByBrandId(brandId)
            cache.set(cacheName, foundData)
            if (foundData) {
                return res.status(200).json(foundData)
            } else {
                return res.status(404).json('not found')
            }

        } catch (error: any) {
            res.status(400).json(`retrieve failed: ${error?.message || 'reason unknown'}`)
        }
    }

    res.status(200).json(cachedData)
})

huggRouter.get('/product/stores/:productId', async (req, res) => {
    const { productId } = req.params
    const cacheName = `allStoredByProduct-${productId}`
    const cachedData = cache.get(cacheName)

    if (!cachedData) {
        try {
            const foundData = getAllstoresByproductId(productId)
            cache.set(cacheName, foundData)
            if (foundData) {
                return res.status(200).json(foundData)
            } else {
                return res.status(404).json('not found')
            }

        } catch (error: any) {
            if (error.cause === 'NOT_FOUND') {
                console.log('error===', error )
                return res.status(404).json(error.message)
            }
            res.status(400).json('retrieve failed')
        }
    }

    res.status(200).json(cachedData)
})


huggRouter.get('/brand/stores/:brandId', async (req, res) => {
    const { brandId } = req.params
    const cacheName = `allStoredByBrand-${brandId}`
    const cachedData = cache.get(cacheName)

    if (!cachedData) {
        try {
            const foundData = getAllstoresByBrandId(brandId)
            cache.set(cacheName, foundData)
            if (foundData) {
                return res.status(200).json(foundData)
            } else {
                return res.status(404).json('not found')
            }

        } catch (error) {
            res.status(400).json('retrieve failed')
        }
    }

    res.status(200).json(cachedData)
})

export {
    huggRouter
}
