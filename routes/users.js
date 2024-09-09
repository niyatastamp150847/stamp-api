var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");
const upload = require("../middleware/multerConfig");

// http://127.0.0.6:3000/users
router.get("/", userController.showAllUsers);

// http://127.0.0.6:3000/users/pagination?page=1&limit=5
router.get('/pagination', userController.getPagination);

// http://127.0.0.6:3000/users/:id
router.get("/:id", userController.showById);

// http://127.0.0.6:3000/users/register
router.post("/register", upload.single("image"), userController.register);

// http://127.0.0.6:3000/users/register
router.post("/login", userController.login);

// http://127.0.0.6:3000/users/register
router.put("/:id", upload.single("image"), userController.updateUser);

// http://127.0.0.6:3000/users
router.delete("/:id", userController.deleteUser);







// http://127.0.0.6:3000/users/me
// router.get('/me', function(req, res, next) {
//   res.send('Hello World ???');
// });

// // http://127.0.0.6:3000/users/a
// router.get('/a', function(req, res, next) {
//   res.send('Hello Aon');
// });

module.exports = router;
