const {  mongoose } = require('../config/db');

let StudentSchema = new mongoose.Schema(
    {
       name:{type:String ,required:true},
       surname : String,
       email: String,
       Password: String,
       Mobileno : Number,
       age : Number,
    },
{
    timestamps:true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
})

let student = mongoose.model('Student',StudentSchema);

exports.student = student;

