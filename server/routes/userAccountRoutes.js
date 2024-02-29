const express = require('express')
const router = express.Router()
const userController = require('../controllers/userAccountController')
//const tokenValidation = require('../middleware/tokenValidation')

router.post('/account', userController.createAccount)

router.get('/accounts', userController.getAccounts)

router.get('/account/:id', userController.getOneAccount)

module.exports = router