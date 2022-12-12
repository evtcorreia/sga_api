const database = require('../models')
const decodeJwt = require('../services/decodeJwt');


class AnoLetivoController{

    static async criar(req, res){


     
         const dados = req.body;

        const anoLetivo = {
            ano: dados.ano,
            status_ano_letivo_id:1
        }

        try{

            database.sequelize.transaction(async(t)=>{

                const anoLetivoRes = await database.Ano_Letivo.create(anoLetivo, {transaction: t})
                res.status(201).json(anoLetivo)


            })


        }catch(e){

            res.status(400).json(e.message)
            
        }
    } 


    static async Listar(req, res){

        const info = await decodeJwt(req)


        try {
            const lista = await database.Ano_Letivo.findAll({
                where:{status_ano_letivo_id:1}
            })

            return res.status(200).json(lista)
        } catch (e) {

            return res.status(500).json(e.message)
            
        }
    }
}

module.exports = { AnoLetivoController }