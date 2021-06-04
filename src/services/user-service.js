'use strict'

const db = require('../models')
const User = db.User

module.exports = {

    createU: async(user)=>{
        try {
            return await User.create(user)
        }
        catch (error) {
            throw new Error(error.message)
        }
    },
    
    deleteU: async (email)=>{
        try {
            var userFound = await User.findOne({where: {email: email}})
            await userFound.destroy()
            return {
                status: 200,
                message: "Deleted "+userFound.name+" successfully"
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}