const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    accountId: {
        type: Number,
        required: true,
        unique: true,
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
