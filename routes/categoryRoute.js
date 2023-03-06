const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createCategory); // localhost:3000/courses
// router.route('/yeni').post(courseController.yenikurs); // localhost:3000/courses/yenikurs
router.route('/:id').delete(categoryController.deleteCategory);


module.exports = router;