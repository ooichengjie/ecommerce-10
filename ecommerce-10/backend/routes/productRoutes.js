import express from 'express'
const router = express.Router()
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    createProductReview,
    getTopProducts,
    deleteProduct,
} from '../controllers/productController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post( admin, protect, createProduct)

router.route('/:id')
  .get(getProductById)
  .put(admin, protect, updateProduct)
  .delete(admin, protect, deleteProduct)

router.route('/:id/reviews').
    post(protect, createProductReview)

router.get('/top', getTopProducts)

export default router