const { Router } = require('express');
const { UsuariosController } = require('../controllers/UsuariosController');
const  verifyJwt  = require('./../services/verifyJwt')



const router = Router()
router

.post('/v1/login', UsuariosController.realizaLogin)
.post('/v1/usuario/novo',  /* verifyJwt, */ UsuariosController.cadastrar)



module.exports = router