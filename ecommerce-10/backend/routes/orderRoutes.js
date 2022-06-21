import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrders,
  getOrderById,
  getMyOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
} from '../controllers/orderController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

router.route('/')
    .post(protect, addOrderItems)
    .get(admin, protect, getOrders)

router.route('/:id')
    .get(protect, getOrderById)

router.route('/myorders')
    .get(protect, getMyOrders)

router.route('/:id/pay')
    .put(protect, updateOrderToPaid)

router.route('/:id/deliver')
    .put(admin, protect, updateOrderToDelivered)
    
export default router