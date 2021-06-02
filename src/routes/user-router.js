const { createUser } = require("../controllers/user-controller")
const router = require("express").Router()


router.post("/", createUser)


module.exports = router