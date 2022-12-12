const { Router } = require('express');
const { TurmasController } = require('../controllers/TurmasController');
const  verifyJwt  = require('./../services/verifyJwt')




const router = Router()

router

    .post('/v1/turma/nova', /* verifyJwt, */ TurmasController.CriarTurma)
    .get('/v1/turmas', verifyJwt, TurmasController.Listar)


    module.exports = router