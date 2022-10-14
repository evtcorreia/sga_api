const { Router } = require('express');
const { SalasController } = require('../controllers/SalasController');
const  verifyJwt  = require('./../services/verifyJwt')



const router = Router()
router

.get('/v1/salas',  verifyJwt, SalasController.Lista)
.post('/v1/sala/criar',   verifyJwt, SalasController.Criar)
.put('/v1/sala/alterar/:id',   verifyJwt, SalasController.Alterar)
.put('/v1/sala/deletar/:id',   verifyJwt, SalasController.Deletar)


module.exports = router