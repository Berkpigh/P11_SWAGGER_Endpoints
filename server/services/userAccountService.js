const Account = require('../database/models/accountModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.createAccount = async serviceData => {
    //console.log(serviceData)
    try {
  
      const newAccount = new Account({
        accountType: serviceData.accountType,
        userId: serviceData.userId,
        creationDate: serviceData.creationDate,
        name: serviceData.name,
        balance: serviceData.balance
      })
      //console.log(newAccount)
      let result = await newAccount.save()
  
      return result
    } catch (error) {
      console.error('Error in userService.js', error)
      throw new Error(error)
    }
  }
  
module.exports.getUserAccounts = async serviceData => {
    try {
      //const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
      //const decodedJwtToken = jwt.decode(jwtToken)
      console.log('serviceData :',serviceData)
      const userAccounts = await Account.find(serviceData)
      //console.log(userAccounts)
  
      return userAccounts
    } catch (error) {
      console.error('Error in userService.js', error)
      throw new Error(error)
    }
  }
  
  module.exports.getUserAccountById = async serviceData => {
    try {
      console.log(serviceData)
      const userAccount = await Account.find(serviceData)
      //console.log(userAccount)
  
      return userAccount
    } catch (error) {
      console.error('Error in userService.js', error)
      throw new Error(error)
    }
  }
  