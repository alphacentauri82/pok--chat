// routes/server.js
var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.post('/login', userController.login);

module.exports = router;