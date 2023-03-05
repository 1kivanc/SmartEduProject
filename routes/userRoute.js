const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const {body} = require('express-validator');
const User = require('../models/User');

const router = express.Router();

router.route('/signup').post([
    body('name').not().isEmpty().withMessage('Please Enter Your Name'),
    body('email').isEmail().withMessage('Please enter valid Email')
    .custom((userEmail) => {
        return User.findOne({email:userEmail}).then(user => {
            if(user){
                return Promise.reject('Email is already exists')
            }
        })
    }),
    body('password').not().isEmpty().withMessage('Please Enter a Password'),
],authController.createUser); // localhost:3000/courses
// router.route('/yeni').post(courseController.yenikurs); // localhost:3000/courses/yenikurs
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/:id').delete(authController.deleteUser);
router.route('/dashboard').get(authMiddleware,authController.getDashboardPage);



module.exports = router;