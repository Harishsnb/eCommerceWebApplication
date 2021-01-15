const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/signup', authController.getSignup);

router.get('/signin', authController.getSignin);

router.post('/signup', authController.postSignup);

router.post('/signin', authController.postSignin);

router.post('/signout', authController.postSignout);

module.exports = router;