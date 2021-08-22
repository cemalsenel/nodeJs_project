var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', usersController.getUsers );
router.get('/add', usersController.showAddUserForm );

router.post("/add", usersController.addUser);

router.get("/:id/delete", usersController.deleteUser);

router.get("/:id/edit", usersController.showEditUserPage)
router.post("/:id/edit", usersController.editUser)

module.exports = router;
