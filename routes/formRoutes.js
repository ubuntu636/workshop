const express = require('express');
const { createFormData,admindata } = require('../controllers/formController');

const router = express.Router();

router.post('/form', createFormData);
router.get('/admin',admindata)
module.exports = router;
