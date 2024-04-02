const ProductModel = require('../model/product')
const createHttpError = require('http-errors')
const mongoose = require('mongoose')

exports.ProductCreate = async (req,res,next) => {
    const{
        name,
        product_description,
        unit_price,
        image
    }= req.body;
        try{
           const {image } = req.files;
            if(!image){
                throw createHttpError(404,"Image not found")
            };
            if (!image.mimetype.startsWidth('image')){
                throw createHttpError(400, 'Only images re allowed');
            }
            let filepath = ___dirname +'../../../public/products/'+ image.name
            image.mv(filepath);
            let filephotoUpload = '/public/products/' + image.name


            if(!name || !product_description || !unit_price){
                throw createHttpError(400, 'Please add all the required Details')
            }
    const products = new ProductModel({
        name,
        product_description,
        unit_price,
        image:filephotoUpload,
    });
        const result = await products.save();
        res.status(201).send(result);
    
        }catch (error){
            next(error)
        }
}

exports.ProductUpdate = async (req,res,next) => {
    const productId = req.params.id;
    const{
        name,
        product_description,
        unit_price
        }= req.body;
        
    try{
        if (!mongoose.isValidObjectId(productId)){
            throw createHttpError(400,"Invalid Id")
        }

        if(!name || !product_description || !unit_price){
            throw createHttpError(400, 'Please add all the required Details')
        }
        const products = await ProductModel.findById(productId).exec();

        if (!products){
            throw createHttpError(404, 'Product not found');
        }
        products.name = name;
        products.product_description = product_description;
        products.unit_price = unit_price;

        const result = await products.save();
        res.status(200).send(result);
    }catch (error) {
        next (error)
    }
}
exports.ProductDelete = async (req,res,next) => {
    const productId = req.params.id;

    try{
        if (!mongoose.isValidObjectId(productId)){
            throw createHttpError(400,"Invalid Id")
    }
    const result = await ProductModel.findByIdAndDelete(productId).exec();

    if (!result){
        throw createHttpError(404, 'Product not found');
    }
    res.status(200).send(result);
    }catch (error) {
        next (error)
    }
}

exports.GetallProducts = async (req,res,next) => {
    try {
        const result = await ProductModel.find().exec();
            res.status(200).send(result);
    }catch (error){
        next(error)
    }
}

exports.GetOneProduct = async (req,res,next) => {
    const Id = req.params.id;
    try{
        if (!mongoose.isValidObjectId(Id)){
            throw createHttpError(400,"Invalid Id")
    }
    const result = await ProductModel.findById(Id).exec();

    if (!result){
        throw createHttpError(404, 'Product not found');
    }
    res.status(200).send(result);
    }catch (error) {
        next (error)
    }
}

exports.SearchProduct = async (req,res,next) => {
    const query = req.query.q;
    try{
        if (!query){
            throw createHttpError(400,"Please provide a search query")
    }
    const result = await ProductModel.find({name:{$regex:query, $options:'i'}}).exec();

    if (!result){
        throw createHttpError(404, 'Product not found');
    }
    res.status(200).send(result);
    }catch (error) {
        next (error)
    }
}