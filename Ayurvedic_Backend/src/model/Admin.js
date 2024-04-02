const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
   name:{
    type: String,
    required:true
   },
   email:{
    type: String,
    required:true
   },
   password:{
    type: String,
    required:true
   },
   phone:{
    type: String,
    required:true
   },
   address:{
    type: String,
    required:true
   }

});

const Admin = mongoose.model('Admin',companySchema);

module.exports=Admin;