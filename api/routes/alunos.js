const { Router } = require('express');
const { AlunoController } = require('../controllers/AlunosController');
const  verifyJwt  = require('./../services/verifyJwt')



const router = Router()
router

.get('/v1/alunos',  verifyJwt,AlunoController.Lista)
.post('/v1/alunos/matricular',  verifyJwt,AlunoController.Matricular)
.get('/v1/aluno/:id',/* verifyJwt, */ AlunoController.Buscar)
.put('/v1/aluno/alterar/:id',verifyJwt, AlunoController.Alterar)
.put('/v1/aluno/delete/:id',verifyJwt, AlunoController.Delete)
.get('/v1/aluno/sala/:id', verifyJwt,  AlunoController.AlunoPorSala)
.get('/v1/alunos/full',  verifyJwt,AlunoController.AlunosComDisciplinas)
.post('/v1/aluno/alocar/:id', verifyJwt, AlunoController.alocarAluno)
.get('/v1/aluno/turma/:id', verifyJwt, AlunoController.alunosPorTurma)


module.exports = router