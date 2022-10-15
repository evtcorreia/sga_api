const { Sequelize } = require('./../models')
const database = require('./../models')
const decodeJwt = require('../services/decodeJwt');

class SalasController{

    static async Lista(req, res){

        const info = await decodeJwt(req)

        

        const lista =  await database.Salas.findAll({
            include:{
                model:database.Escolas,
                where:{
                    id:info.escola
                }
            }
        })

        res.status(201).json(lista)
    }


    static async Criar(req, res){

        const info = await decodeJwt(req)

        

        const dados = req.body;

        const novaSala = {
            numero:dados.numero,
            descricao:dados.descricao,
            escola_id:info.escola,
            capacidade:dados.capacidade,
            status_sala_id:1,
            createdAt: Date(),
            updatedAt: Date() 
        }

        try {

            database.sequelize.transaction(async(t)=>{


                const sala = await database.Salas.create(novaSala, {transactio: t})
                res.status(201).json(sala)

            })
            
        } catch (e) {
            
            res.status(400).json(e.message)
        }


        
    }


    static async Alterar(req, res){

        const dados = req.body;
        const {id} = req.params;

        const novaSala = {
            numero:dados.numero,
            descricao:dados.descricao,
            escola_id:1,
            capacidade:dados.capacidade,
            status_sala_id:1,
            createdAt: Date(),
            updatedAt: Date() 
        }

        try {         


                const sala = await database.Salas.update(novaSala,{
                    where:{id:id}
                })
                res.status(201).json(sala)

            
            
        } catch (e) {
            
            res.status(400).json(e.message)
        }


        
    }

    static async Deletar(req, res){

        const dados = req.body;
        const {id} = req.params;

        const deleta = { status_sala_id:3,
             
        }

        try {         


                const sala = await database.Salas.update(deleta,{
                    where:{id:id}
                })
                res.status(201).json(sala)

            
            
        } catch (e) {
            
            res.status(400).json(e.message)
        }


        
    }
}

module.exports = {SalasController}