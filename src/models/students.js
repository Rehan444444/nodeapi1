const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
       name:{
        type:String,
        required: true,
        minlength:4
       },
       email:{
        type:String,
        required:true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value))
            throw new error("Invalid Email")
        }

       },
       phone:{
        type:Number,
        required:true,
        minlength:10
       },
       address:{
        type:String,
        required:true,
        unique:true
       }
})

//  now we are creating a new models for a collection
const Student =new mongoose.model("Student", studentSchema);

module.exports= Student;