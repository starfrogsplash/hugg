import { Router } from "express";
import { cache } from '../utils/cache';
import {
    getByBrandId,
    getAllproductsByBrandId,
    getAllstoresByBrandId,
    getAllstoresByproductId
} from '../controllers/huggControllers'

const huggRouter = Router()

huggRouter.get('/', (req, res) => res.status(200).json('hugg: v1'))

huggRouter.get('/brand/:brandId', (req, res) => {
    const { brandId } = req.params
    const cachedData = cache.get(`${brandId}`)

    if (!cachedData) {
        try {
            const foundLog = getByBrandId(brandId)
            cache.set(`${brandId}`, foundLog)
            if (foundLog) {
                return res.status(200).json(foundLog)
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
            const foundLog = getAllproductsByBrandId(brandId)
            cache.set(cacheName, foundLog)
            if (foundLog) {
                return res.status(200).json(foundLog)
            } else {
                return res.status(404).json('not found')
            }

        } catch (error) {
            res.status(400).json('retrieve failed')
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
            const foundLog = getAllstoresByproductId(productId)
            cache.set(cacheName, foundLog)
            if (foundLog) {
                return res.status(200).json(foundLog)
            } else {
                return res.status(404).json('not found')
            }

        } catch (error) {
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
            const foundLog = getAllstoresByBrandId(brandId)
            cache.set(cacheName, foundLog)
            if (foundLog) {
                return res.status(200).json(foundLog)
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
