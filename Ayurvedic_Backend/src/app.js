require('dotenv').config()
const express = require("express");
const json = require("express");
const cors = require("cors");
const app = express();
const fileUpload = require('express-fileupload');

const { isHttpError } = require('http-errors');
const CustomerRouter = require('./routes/customer');
const AdminRouter = require('./routes/admin');
const ProductsRouter = require('./routes/products');
//const OrderRouter = require('./routes/order');
app.use(cors());
app.use(fileUpload());
app.use('/uploads/products', express.static(__dirname + '/uploads/products'));

app.use(json())
const port = process.env.PORT

app.use('/api/v1/customers', CustomerRouter);
app.use('/api/v1/admins', AdminRouter);
app.use('/api/v1/products', ProductsRouter);
//app.use('/api/v1/orders', OrderRouter)

app.use((err, req, res, next) => {
    if (isHttpError(err)) {
        res.status(err.status).send({ message: err.message })
    } else {
        res.status(500).send({ message: err.message })
    }
    //error unknown
    res.status(500).send({ message: "Error Unknown" })
})

module.exports = app;