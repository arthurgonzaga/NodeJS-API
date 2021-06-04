const { createUser, deleteUser } = require("../controllers/user-controller")
const router = require("express").Router()


router.post("/insert", createUser)
router.post("/delete", deleteUser)


module.exports = router