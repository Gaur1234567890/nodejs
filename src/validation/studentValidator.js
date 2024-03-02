const {check} = require('express-validator')
let studentValidator = [
    check('name','name is required ').notEmpty()
]

exports.studentValidator = studentValidator;