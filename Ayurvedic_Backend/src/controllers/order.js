const OrderModel = require('../model/order')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const Admin = require('../model/Admin');
const { default: mongoose } = require('mongoose');

exports.create = async(req,res,next) =>{
    const {
        customer,
        product,
        quantity,
        order_information,
        address
    }= req.body;

    try{ 
    const {pdf_file } = req.files;
    if(!pdf_file){
        throw createHttpError(404,"pdf_file not found");
    };
    
    let filepath = ___dirname +'../../../public/file_pdfs/'+ pdf_file.name
    pdf_file.mv(filepath);
    let filephotoUpload = '/public/file_pdfs/' + pdf_file.name

    if(!customer || !product || !quantity || !address){
        throw createHttpError(400,'Please provide all the required fields');

    }

    const customerId = mongoose.Types.ObjectId(customer);
    const productId = mongoose.Types.ObjectId(product);

    const order = new OrderModel({
        customer:customerId,
        product:productId,
        quantity,
        total:quantity * product.price,
        date: Date.now(),
        orderStatus:'pending',
        report_file: filephotoUpload,
        order_information,
        address
    });

    const result = await order.save();
    res.status(201).send(result);

    }catch(error){

    }
}

exports.getOrdersByAdmin = async(req,res,next) => {
    const adminId = req.params.id;
    try{
        const orders = await OrderModel.find({admin:adminId}).populate('customer').populate('product').exec();
        res.send(orders);
    }catch(error){
        next(error)
    }
}

exports.getOrdersByCustomer = async(req,res,next) => {
    const customerId = req.params.id;
    try{
        const orders = await OrderModel.find({customer:customerId}).populate('customer').populate('product').exec();
        res.send(orders);
    }catch(error){
        next(error)
    }
}

