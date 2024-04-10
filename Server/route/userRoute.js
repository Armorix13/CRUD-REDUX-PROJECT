const userController = require("../Controller/userController");
const router = require("express").Router();

router.post("/create", userController.createUser);
router.get("/users", userController.getAllUser);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
