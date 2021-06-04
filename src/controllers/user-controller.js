const { createU , deleteU } = require("../services/user-service")

module.exports = {

    createUser: async (req, res) => {

        // Validate the request
        if(!req.body.name){
            res.status(400).send({ 
                    message: "Content can not be empty!"
                }
            )
        }
    
        try {
            
            var dataResult = await createU(req.body)
            res.json(dataResult)

        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    },

    deleteUser: async(req, res) => {

        // Validate the request
        if(!req.body.email){
            res.status(400).send({ 
                    message: "Content can not be empty!"
                }
            )
        }
    
        try {
            
            var dataResult = await deleteU(req.body.email)
            res.json(dataResult)

        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
}