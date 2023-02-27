const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser); // localhost:3000/courses
// router.route('/yeni').post(courseController.yenikurs); // localhost:3000/courses/yenikurs


module.exports = router;