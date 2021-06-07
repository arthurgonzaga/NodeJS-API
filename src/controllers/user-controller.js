const { createU , deleteU } = require("../services/user-service")

module.exports = {

    createUser: async (req, res) => {

        // Validate the request
        if(!req.body){
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
        if(!req.body.firebase_id){
            res.status(400).send({ 
                    status: 400,
                    message: "Content can not be empty!"
                }
            )
        }
    
        try {
            
            var dataResult = await deleteU(req.body.firebase_id)
            res.json(dataResult)

        } catch (error) {
            res.status(500).send({
                status: 500,
                message: error.message
            })
        }
    }
}