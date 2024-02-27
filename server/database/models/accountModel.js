const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    accountType: {
        type: Number,
        required: true,
        unique: false,
    },
    userId: {
        type : String,
        required: true,
        unique: false,
    },
    creationDate: {
        type: Date,
        required: true,
        unique: false,
    },
    name: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
    },
}, { timestamps: true })

module.exports = mongoose.model('Account', accountSchema)
