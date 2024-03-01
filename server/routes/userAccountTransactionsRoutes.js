const express = require('express')
const router = express.Router()
const userAcctTranCont = require('../controllers/userAccountTransactionsController')
//const tokenValidation = require('../middleware/tokenValidation')

router.post('/account/transaction', userAcctTranCont.createTransaction)

router.get('/account/:id/transactions', userAcctTranCont.getTransactions)

router.get('/account/transaction/:id', userAcctTranCont.getOneTransaction)

module.exports = router