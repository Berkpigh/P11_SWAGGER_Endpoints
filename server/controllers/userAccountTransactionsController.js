const userAcctTranService = require('../services/userAccountTransactionsService')

module.exports.createTransaction = async (req, res) => {
  console.log('createTransaction :', req.body)
    let response = {}
  
    try {
      const responseFromService = await userAcctTranService.createTransaction(req.body)
      response.status = 200
      response.message = 'Transaction successfully created'
      response.body = responseFromService
    } catch (error) {
      console.error('Something went wrong in userController.js when creating transaction', error)
      response.status = 400
      response.message = error.message
    }
  
    return res.status(response.status).send(response)
  }
  
  module.exports.getTransactions = async (req, res) => {
    let response = {}
  
    try {
      const responseFromService = await userAcctTranService.getOneAccountTransactions(req.params)
      response.status = 200
      response.message = 'Successfully got user account transactions'
      response.body = responseFromService
      //console.log('response :',response)
    } catch (error) {
      console.log('Error in userController.js')
      response.status = 400
      response.message = error.message
    }
  
    return res.status(response.status).send(response)
  }
    
  module.exports.getOneTransaction = async (req, res) => {
    let response = {}
    const paramTransaction = {
      _id: req.params.tranid,
      accountId: req.params.acctid
    }
    try {
      const responseFromService = await userAcctTranService.getOneTransaction(paramTransaction)
      response.status = 200
      response.message = 'Successfully got user a particular account transaction'
      response.body = responseFromService
      //console.log('response :',response)
    } catch (error) {
      console.log('Error in userController.js')
      response.status = 400
      response.message = error.message
    }
  
    return res.status(response.status).send(response)
  }