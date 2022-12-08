const { Router } = require('express');
const { TurmasController } = require('../controllers/TurmasController');
const  verifyJwt  = require('./../services/verifyJwt')




const router = Router()

router

    .post('/v1/turma/nova', /* verifyJwt, */ TurmasController.CriarTurma)


    module.exports = router