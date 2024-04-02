
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const AdminModel = require('../model/Admin');

exports.register = async (req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const phone = req.body.phone
    const address = req.body.address
    try {
        if (!email || !password || !name || !phone || !address) {
            throw createHttpError(400, 'Missing required parameters')

        }
        const isAdminAvailable = await AdminModel.findOne({ email: email }).exec();

        if (isAdminAvailable) {
            throw createHttpError(400, 'admin already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new AdminModel({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
            address:address
        })

        const result = await admin.save();
        res.status(201).send(result);

    } catch (error) {
        next(error)
    }
}