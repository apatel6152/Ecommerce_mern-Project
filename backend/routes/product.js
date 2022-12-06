const express = require('express');
const  productController= require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.get("/products", productController.getAllProducts);
router.get("/admin/products",isAuthenticatedUser, authorizeRoles("admin"), productController.getAdminProducts);

router.post('/admin/product/new',isAuthenticatedUser,authorizeRoles("admin"), productController.createProduct);

router.put('/admin/product/:id',isAuthenticatedUser, authorizeRoles("admin"),productController.updateProduct);

router.delete('/admin/product/:id',isAuthenticatedUser, authorizeRoles("admin"), productController.deleteProduct);

router.get('/product/:id',  productController.getProductDetails);

router.put('/review',isAuthenticatedUser, productController.createProductReview);

router.get('/reviews', productController.getProductReviews);

router.delete('/reviews',isAuthenticatedUser, productController.deleteReview);

module.exports = router;