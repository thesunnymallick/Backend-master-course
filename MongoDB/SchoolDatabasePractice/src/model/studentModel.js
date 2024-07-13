import mongoose from "mongoose";
import {subjectSchema} from "./SubjectModel"
const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required :[true, "Name is Required"],
    },
    email:{
      type:String,
    },
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
        enum:['MALE', 'FEMALE'],
        default:'MALE'
    },
    phoneNo:{
        type:Number,
    },
    status:{
        type:Boolean
    },
    subject:[subjectSchema],
    

}, {timestamps:true})

const studentModel=mongoose.model('students', studentSchema);

export default studentModel;