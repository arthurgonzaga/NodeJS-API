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
    
    deleteU: async (firebase_id)=>{
        try {
            var userFound = await User.findOne({where: {firebase_id: firebase_id}})
            await userFound.destroy()
            return {
                status: 200,
                message: "Deleted "+userFound.firebase_id+" successfully"
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}