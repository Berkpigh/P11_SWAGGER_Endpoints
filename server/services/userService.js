const User = require('../database/models/userModel')
const Account = require('../database/models/accountModel')
const Transaction = require('../database/models/transactionModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.createUser = async serviceData => {
  console.log(serviceData)
  try {
    const user = await User.findOne({ email: serviceData.email })
    if (user) {
      throw new Error('Email already exists')
    }

    const hashPassword = await bcrypt.hash(serviceData.password, 12)

    const newUser = new User({
      email: serviceData.email,
      password: hashPassword,
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      userName: serviceData.userName
    })
  console.log(newUser)
    let result = await newUser.save()

    return result
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.getUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.decode(jwtToken)
    const user = await User.findOne({ _id: decodedJwtToken.id })

    if (!user) {
      throw new Error('User not found!')
    }

    return user.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.loginUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })

    if (!user) {
      throw new Error('User not found!')
    }

    const isValid = await bcrypt.compare(serviceData.password, user.password)

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    )

    return { token }
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.updateUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.decode(jwtToken)
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      {
        userName: serviceData.body.userName
      },
      { new: true }
    )

    if (!user) {
      throw new Error('User not found!')
    }

    return user.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

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
    const paramUser = {
      "userId": serviceData.id
    }
    console.log('paramUser :',paramUser)
    const userAccounts = await Account.find(paramUser)
    //console.log(userAccounts)

    return userAccounts
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.getUserAccountById = async serviceData => {
  try {
    //console.log(serviceData)
    const userAccount = await Account.findById(serviceData.id)
    //console.log(userAccount)

    return userAccount
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.createTransaction = async serviceData => {
  console.log(serviceData)
  try {

    const newTransaction = new Transaction({
      accountId: serviceData.accountId,
      creationDate: serviceData.creationDate,
      description: serviceData.description,
      amount: serviceData.amount,
      balance: serviceData.balance,
      transactionType: serviceData.transactionType,
      transactionCategory: serviceData.transactionCategory,
      notes: serviceData.notes,
    })
    console.log(newTransaction)
    let result = await newTransaction.save()

    return result
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.getOneAccountTransactions = async serviceData => {
  try {
    accPar = {
      "accountId": serviceData.id
    }
    console.log('accPar :', accPar)
    const userAccountTransactions = await Transaction.find(accPar)
    return userAccountTransactions
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
