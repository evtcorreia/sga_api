const { Router } = require('express');
const { AnoLetivoController } = require('../controllers/AnoLetivoController')
const  verifyJwt  = require('../services/verifyJwt')


const router = Router()

router
    
    .post('/v1/ano-letivo/novo', /* verifyJwt,  */AnoLetivoController.criar )
    .get('/v1/ano-letivo/listar', verifyJwt, AnoLetivoController.Listar)


module.exports = router