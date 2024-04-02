const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
   name:{
    type: String,
    required:true
   },
   unit_price:{
    type: Number,
    required:true
   },
   product_description:{
    type: String,
    required:true
   },
   image:{
    type: String,
    required:true
   },

});

const Product = mongoose.model('Product',productSchema);

module.exports=Product;