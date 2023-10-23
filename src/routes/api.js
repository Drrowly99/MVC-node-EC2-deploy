const express = require('express');
const app = express();
const fs = require('fs');
const UserController = require('../controllers/UserController');
const Auth = require('../middlewares/ValidateMiddleware');
const mysql = require('mysql');

const router = express.Router();

router.use(Auth.validate)

router.get('/register',  UserController.home)


module.exports = router