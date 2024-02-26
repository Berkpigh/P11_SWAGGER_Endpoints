const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    accountId: {
        type : String,
        required: true,
        unique: false,
    },
    creationDate: {
        type: Date,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
    amount: {
        type: Number,
        required: true,
        unique: false,
    },
    balance: {
        type: Number,
        required: true,
        unique: false,
    },
    transactionType: {
        type: Number,
        required: false,
        unique: false,
    },
    transactionCategory: {
        type: Number,
        required: false,
        unique: false,
    },
    notes: {
        type: Number,
        required: false,
        unique: false,
    },
}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema)
