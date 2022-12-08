const database = require('./../models')
const decodeJwt = require('../services/decodeJwt');



class TurmasController{


    static async CriarTurma(req, res){

        const dados = req.body

        const turma = { 
            identificador: dados.identificador,
            status_turma_id:1,
            serie_id: dados.serie_id,
            sala_id: dados.sala_id,
            status_sala_id:1
        }


        try {

            database.sequelize.transaction(async(t)=>{
                const turmaRes = await database.Turmas.create(turma, {transaction: t})

                res.status(201).json(turma)
            })
            
        } catch (e) {

            res.status(400).json(e.message)
            
        }



    }
}

module.exports = { TurmasController }