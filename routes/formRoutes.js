const express = require('express');
const { createFormData,admindata, hitfunc } = require('../controllers/formController');

const router = express.Router();

router.post('/form', createFormData);
router.get('/admin',admindata)
router.get('/hit', hitfunc)
module.exports = router;
