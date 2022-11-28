const express = require('express');
const userController = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.post("/password/forgot", userController.forgotPassword);

router.put("/password/reset/:token", userController.resetPassword);

router.get("/logout", userController.logout);

router.get("/me",isAuthenticatedUser, userController.getUserDetails);

router.put("/password/update",isAuthenticatedUser, userController.updatePassword);

router.put("/me/update",isAuthenticatedUser, userController.updateProfile);

router.get("/admin/users",isAuthenticatedUser,authorizeRoles("admin"), userController.getAllUser);

router.get("/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"), userController.getSingleUser);

router.put("/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"), userController.updateUserRole);

router.delete("/admin/user/:id",isAuthenticatedUser,authorizeRoles("user"), userController.deleteUser);

module.exports = router;