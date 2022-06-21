import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUsers,
  getUserById,
  updateUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.post('/login', authUser)

router.route('/').post(registerUser).get(protect, admin, getUsers)

router.route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser)

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  
export default router