const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
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
   
   identitycard:{
      type: String,
      required:false,
   }

});

const Customer = mongoose.model('Customer',customerSchema);

module.exports=Customer;