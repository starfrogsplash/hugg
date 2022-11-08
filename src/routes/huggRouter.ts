import { Router } from "express";
import { cache } from '../utils/cache';
import {
    getByBrandId,
    getAllproductsByBrandId,
    getAllstoresByBrandId,
    getAllstoresByproductId
} from '../controllers/huggControllers'

const huggRouter = Router()

huggRouter.get('/brand/:brandId', (req, res) => {
    const { brandId } = req.params

    const cachedLog = cache.get(`${brandId}`)

    if (!cachedLog) {
        try {
            const foundLog =  getByBrandId(brandId)
            cache.set(`${brandId}`, foundLog)
            if(foundLog){
                return res.status(200).json(foundLog)
            }else {
                return res.status(404).json('not found')
            }
        
        } catch (error) {
            res.status(400).json('retrieve failed')
        }
    }

    res.status(200).json(cachedLog)
})

huggRouter.get('/products/:brandId', async (req, res) => {
    const { brandId } = req.params

    res.status(200).json(brandId)
})

huggRouter.get('/stores/:productId', async (req, res) => {
    const { productId } = req.params

    res.status(200).json(productId)
})


huggRouter.get('/stores/:productId', async (req, res) => {
    const { productId } = req.params

    res.status(200).json(productId)
})

export {
    huggRouter
}
