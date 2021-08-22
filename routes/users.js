var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', usersController.getUsers );

module.exports = router;
