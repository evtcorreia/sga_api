const database = require('./../models')
const decodeJwt = require('../services/decodeJwt');


class SeriesController{

    static async Criar(req, res){
        
        //const info = decodeJwt(req)

        const dados = req.body

        const serie = {
            
            serie:dados.serie,
            status_series_id:1

        }

        try {

            database.sequelize.transaction(async(t)=>{
                const serieRes = await database.Series.create(serie, { transaction: t})

                res.status(201).json(serieRes)
            })
            
        } catch (e) {
            res.status(400).json(e.message)
        }


    }


    static async Listar(req, res){

        try {
            const lista = await database.Series.findAll()
            
            return res.status(200).json(lista)
        } catch (e) {
            
            return res.status(500).json(e.message)
        }
    }
}

module.exports = { SeriesController }