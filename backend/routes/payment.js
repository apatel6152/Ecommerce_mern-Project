const express = require('express');
const router = express.Router();
const  paymentController= require('../controllers/paymentController');
const { isAuthenticatedUser } = require('../middlewares/auth');

router.post("/payment/process", isAuthenticatedUser, paymentController.processPayment);

router.post("/stripeapikey", isAuthenticatedUser, paymentController.sendStripeApiKey);

module.exports = router;