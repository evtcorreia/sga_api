const { Router } = require('express');
const { SeriesController } = require('./../controllers/SeriesController')
const verifyJwt = require('./../services/verifyJwt')


const router = Router()
router

    .post('/v1/serie/nova', /* verifyJwt, */ SeriesController.Criar)



    module.exports = router