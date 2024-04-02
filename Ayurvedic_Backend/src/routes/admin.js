const express = require('express');

const router = express.Router();
const AdminController = require('../controllers/Admin');
router.post('/',AdminController.register)

module.exports = router;