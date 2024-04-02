const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
   customer:{
    type: Schema.Types.ObjectId,
    ref:'Customer',
    required:true,
   },
   product:{
    type: Schema.Types.ObjectId,
    ref:'Product',
    required:true,
   },
   quantity:{
    type: Number,
    required:true,
   },
   total:{
    type: Number,
    required:true
   },
   date:{
    type:Date,
    required:true,
   },
   report_file:{
      type:String,
    required:true,
   },
   order_information:{
      type:String,
    required:false,
   },
   address:{
      type:String,
    required:false,
   },
   orderStatus:{
    type:String,
    required:true,
   }

});

const Order = mongoose.model('Order',orderSchema);

module.exports=Order;