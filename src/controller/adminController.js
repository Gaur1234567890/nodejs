const { validationResult } = require("express-validator");
const { student } = require("../model/student");

let adminController = (req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty()){
        const studentObject = new student({
            name:req.body.name,
            surname : req.body.surname,
            email: req.body.email,
            Password: req.body.Password,
            Mobileno : req.body.Mobileno,
            age : req.body.age,});
        studentObject.save().then(d=>{
           res.status(200).json({
               msg:'successfully data saved'
           })
        }).catch(e=>{
           res.status(400).json({
               msg : 'error to save data'+e
           })
        })

    }
    else{
        res.status(400).json({msg : 'required fields empty'})
    }

    
}
exports.adminController = adminController;