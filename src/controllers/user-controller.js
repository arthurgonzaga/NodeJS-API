'use strict'

const db = require('../models')
const User = db.User

module.exports = {
    createUser: (req, res) => {

        // Validate the request
        if(!req.body.name){
            res.status(400).send({ 
                    message: "Content can not be empty!"
                }
            )
        }
    
        // Create the user
        User.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User."
            });
          });
    
    }
}