import { Router } from "express";
import {cache} from '../utils/cache';
import { findStateLog } from '../controllers/huggControllers'

const huggRouter = Router()

huggRouter.get('/brand/:brandId', async (req, res) => {
    const { brandId } = req.params

    res.status(200).json(brandId)
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
