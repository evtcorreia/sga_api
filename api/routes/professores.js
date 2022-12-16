const { Router } = require('express');
const { ProfessorController } = require('../controllers/professoresController');
//const { AlunoController } = require('../controllers/AlunosController');
const  verifyJwt  = require('./../services/verifyJwt')



const router = Router()
router

.get('/v1/professores',  verifyJwt,ProfessorController.Lista)
.post('/v1/professor/matricular',  verifyJwt,ProfessorController.Matricular)
.get('/v1/professor/:id', /* verifyJwt, */  ProfessorController.Buscar)
.post('/v1/professor/alocar/:id',verifyJwt,ProfessorController.AlocarProfessor)
.put('/v1/professor/alterar/:id', verifyJwt, ProfessorController.Alterar)


module.exports = router