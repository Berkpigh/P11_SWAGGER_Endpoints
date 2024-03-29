const Transaction = require('../database/models/transactionModel')

module.exports.createTransaction = async serviceData => {
    //console.log(serviceData)
    try {
  
      const newTransaction = new Transaction({
        accountId: serviceData.accountId,
        creationDate: serviceData.creationDate,
        description: serviceData.description,
        amount: serviceData.amount,
        balance: serviceData.balance,
        transactionType: serviceData.transactionType,
        transactionCategory: serviceData.transactionCategory,
        notes: serviceData.notes
      })
      //console.log(newAccount)
      let result = await newTransaction.save()
      return result
    } catch (error) {
      console.error('Error in userService.js', error)
      throw new Error(error)
    }
}
  
module.exports.getOneAccountTransactions = async serviceData => {
    try {
      const paramAccount = {
        accountId: serviceData.id
      }
      console.log('paramAccount :',paramAccount)
      const userAccountTransactions = await Transaction.find(paramAccount)
      return userAccountTransactions
    } catch (error) {
      console.error('Error in userService.js', error)
      throw new Error(error)
    }
}
module.exports.getOneTransaction = async serviceData => {
  try {
    console.log('serviceData :',serviceData)
    const userAccountTransaction = await Transaction.findOne({ _id: serviceData })
    return userAccountTransaction
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.updateOneTransaction = async serviceData => {
  try {
    console.log('serviceData :',serviceData)
    const userAccountTransaction = await Transaction.findOneAndUpdate(
      { _id: serviceData.body._id },
      {
        transactionCategory: serviceData.body.transactionCategory,
        notes: serviceData.body.notes
      },
      { new: true }
    )
    return userAccountTransaction.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
