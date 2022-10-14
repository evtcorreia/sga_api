const { Router } = require('express');
const { AlunoController } = require('../controllers/AlunosController');
const  verifyJwt  = require('./../services/verifyJwt')



const router = Router()
router

.get('/v1/alunos', /* verifyJwt, */AlunoController.Lista)
.post('/v1/alunos/matricular', /* verifyJwt, */AlunoController.Matricular)
.get('/v1/aluno/:id', AlunoController.Buscar)
.put('/v1/aluno/alterar/:id', AlunoController.Alterar)
.put('/v1/aluno/delete/:id', AlunoController.Delete)


module.exports = router