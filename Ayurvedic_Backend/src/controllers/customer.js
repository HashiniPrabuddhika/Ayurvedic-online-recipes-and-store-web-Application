const CustomerModel = require('../model/customer')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        if (!email || !password) {
            throw createHttpError(400, 'Missing required parameters')

        }
        const customer = await CustomerModel.findOne({ email: email }).exec();

        if (!customer) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, customer.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }

        const user = await CustomerModel.findOne({ email: email }).exec();

        const identitycard = jwt.sign(
            {
                user_id: user._id,
                email: user.email,
            },
            process.env.JWT_IDENTITY_KEY,
            {
                expiresIn: "5h",
            }
        )

        user.identitycard = identitycard;

        const result = await user.save();
        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}

exports.register = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
   
    try {
        if (!email || !password || !name ) {
            throw createHttpError(400, 'Missing required parameters')

        }
        const isUserAvailable = await CustomerModel.findOne({ email: email }).exec();

        if (isUserAvailable) {
            throw createHttpError(400, 'customer already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const customer = new CustomerModel({
            name: name,
            email: email,
            password: hashedPassword,
           
        })

        const result = await customer.save();
        res.status(201).send(result);

    } catch (error) {
        next(error)
    }
}


