const userAccountService = require('../services/userAccountService')

module.exports.createAccount = async (req, res) => {
    let response = {}
  
    try {
      const responseFromService = await userAccountService.createAccount(req.body)
      response.status = 200
      response.message = 'Account successfully created'
      response.body = responseFromService
    } catch (error) {
      console.error('Something went wrong in userController.js when creating account', error)
      response.status = 400
      response.message = error.message
    }
  
    return res.status(response.status).send(response)
  }
  
  module.exports.getAccounts = async (req, res) => {
    // if (req.userId !== req.params.userId) {
    //   return next(errorHandler(401, 'You can get only your accounts !'));
    // }
    let response = {}
  
    try {
      const responseFromService = await userAccountService.getUserAccounts(req.params.id)
      response.status = 200
      response.message = 'Successfully got user accounts'
      response.body = responseFromService
      //console.log('response :',response)
    } catch (error) {
      console.log('Error in userController.js')
      response.status = 400
      response.message = error.message
    }
  
    return res.status(response.status).send(response)
  }
  
  module.exports.getOneAccount = async (req, res) => {
    console.log(req.params)
    //console.log(req.body._id)
    //const paramAccount = req._id
    // if (req.userId !== req.params.userId) {
    //   return next(errorHandler(401, 'You can get only your accounts !'));
    // }
  
    let response = {}

    try {
      const responseFromService = await userAccountService.getUserAccountById(req.params.id)
      response.status = 200
      response.message = 'Successfully got user account'
      response.body = responseFromService
    } catch (error) {
      console.log('Error in userController.js')
      response.status = 400
      response.message = error.message
    }
  
    return res.status(response.status).send(response)
  }
  