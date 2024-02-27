const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

router.get('/signout', userController.signOut)

router.post('/account', userController.createAccount)

router.get('/useraccounts/:id', userController.getAccounts)

router.get('/getaccount/:id', userController.getOneAccount)

router.post('/transaction', userController.createTransaction)

router.get('/accountbyid/:id/alltransactions', userController.getOneAccountTransactions)

module.exports = router
