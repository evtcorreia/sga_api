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


    static async Listar(req, res){
        

        const info  = await decodeJwt(req)

        console.log(info);


        try {

            const lista = await database.Turmas.findAll({

                include:[{
                    model:database.Salas,
                    where:{escola_id:info.escola}
                 
                },
                {
                    model:database.Series
                }
            
            ]


               

            })

            return  res.status(200).json(lista)
            
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }


    static async turmasComProfessores(req, res){

        const info  = await decodeJwt(req)
        const { id } = req.params

        try {

             const lista = await database.Turmas.findAll({
                include: [{
                  model: database.Professores,                  
                  required:true,
                  include:[{
                    model:database.Pessoas,
                    required:true,
                    include:[{
                        model:database.Usuarios,
                        where:{id:info.id},
                    }]
                }],
                   through: {
                    attributes: [],
                   
                   
                  } 
                
                },
                {
                    model:database.Series
                }
            ]
              }); 

              
              
              
          
    
            res.status(200).json(lista)
        } catch (e) {

            res.status(500).json(e.message)
            
        }
    }
}

module.exports = { TurmasController }