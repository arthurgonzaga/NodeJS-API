'use strict'

const db = require('../models')
const User = db.User

module.exports = {

    create: async(user)=>{
        try {
            var result = await User.create(user)
            return result
        }
        catch (error) {
            throw new Error(error.message)
        }
    }
}