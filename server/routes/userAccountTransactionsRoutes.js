const express = require('express')
const router = express.Router()
const userAcctTranCont = require('../controllers/userAccountTransactionsController')
//const tokenValidation = require('../middleware/tokenValidation')

router.post('/account/transaction', userAcctTranCont.createTransaction)

router.get('/account/:acctid/transactions', userAcctTranCont.getTransactions)

//router.get('/account/:acctid/transaction/:tranid', userAcctTranCont.getOneTransaction)

module.exports = router