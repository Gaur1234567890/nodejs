const express = require('express');
const { adminController } = require('../controller/adminController');
const { studentValidator } = require('../validation/studentValidator');
const adminRoute = express.Router();

adminRoute.post('/getstudent',studentValidator,adminController)

exports.adminRoute =adminRoute;