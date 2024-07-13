import mongoose from "mongoose";

export const subjectSchema=mongoose.Schema({
   subjectId:{
    type:String,
   },
   subjectName:{
    type:String,
   }
}, {timestams:true});

const subjectModel=mongoose.model("Subjects",subjectSchema);
export default subjectModel;