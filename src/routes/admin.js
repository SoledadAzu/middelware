const express = require('express')
const router = express.Router()
const permiso = require('../middlewares/autho')
const { index }= require('../controllers/adminController')


router.get('/',permiso,index)

module.exports= router
