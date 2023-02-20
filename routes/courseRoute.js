const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse); // localhost:3000/courses
// router.route('/yeni').post(courseController.yenikurs); // localhost:3000/courses/yenikurs


module.exports = router;