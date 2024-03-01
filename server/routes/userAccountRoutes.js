const express = require('express')
const router = express.Router()
const userAccountController = require('../controllers/userAccountController')
//const tokenValidation = require('../middleware/tokenValidation')

router.post('/account', userAccountController.createAccount)

router.get('/:id/accounts', userAccountController.getAccounts)

router.get('/account/:id', userAccountController.getOneAccount)

module.exports = router