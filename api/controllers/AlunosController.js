const database = require('./../models')


class AlunoController{

    
    static async Lista(req, res){
        try {

            const lista = await database.Alunos.findAll({
                
                include:[{
                    model:database.Pessoas
                }]
            })
            return res.status(200).json(lista)
            
        } catch (e) {

            return res.status(500).json(e.message)
            
        }
    }

    static async Matricular(req, res){

        const dados =  req.body;

        const endereco = {

            logradouro: dados.logradouro,
            bairro: dados.bairro,
            numero: dados.numero,
            complmento: dados.complmento,
            municipio_id: dados.municipio,
            createdAt: Date(),
            updatedAt: Date()
        }
        const pessoa = {
            nome: dados.nome,
            cpf:dados.cpf,
            dt_nascimento: dados.dt_nascimento,
            status_pessoa_id: 1,
            createdAt: Date(),
            updatedAt: Date()  
           

        }
       const  pivot_escola_pessoas = {
        escolas_id: 1,
        pessoas_id: 1
       }
        const aluno = {
            dt_matricula: Date(),
            status_aluno: 1
        }

    try {

        database.sequelize.transaction(async(t)=>{

            const enderecoRes = await database.Enderecos.create(endereco, {transaction: t});
            const endereco_id = await enderecoRes.id;
            const pessoaRes = await database.Pessoas.create({...pessoa, endereco_id},{transaction: t}); 
            const pessoa_id = await pessoaRes.id;
            const alunoRes = await database.Alunos.create({...aluno, pessoa_id},{transaction: t})


            res.status(201).json(pessoa)

        })

        
    } catch (e) {

        return res.status(500).json(e.message)
        
    }
     

    }

    static async Buscar(req, res){

        const {id} =  req.params;
        
        
        const dados = req.body;


        try {

            
            const aluno = await database.Alunos.findOne({        
                where:{

                    id: id
                },
                include:{
                        model: database.Pessoas
                    }          
            
            
            })
            res.status(200).json(aluno)

            
        } catch (e) {

            return res.status(500).json(e.message)
            
        }


       


    }

    static async  Alterar(req, res){

        const { id } = req.params;
        
        const dados = req.body;

        const endereco = {

            logradouro: dados.logradouro,
            bairro: dados.bairro,
            numero: dados.numero,
            complmento: dados.complmento,
            municipio_id: dados.municipio,
            createdAt: Date(),
            updatedAt: Date()
        }
        const pessoa = {
            nome: dados.nome,
            cpf:dados.cpf,
            dt_nascimento: dados.dt_nascimento,
            status_pessoa_id: 1,
            createdAt: Date(),
            updatedAt: Date()  
           

        }
       const  pivot_escola_pessoas = {
        escolas_id: 1,
        pessoas_id: 1
       }
        const aluno = {
            dt_matricula: Date(),
            status_aluno: 1
        }

        const existeAluno = await database.Alunos.findOne({
            where:{
                id:id
            }
        })

        const enderecoId =  await database.Enderecos.findOne({
            include:[{
                model: database.Pessoas,
                right:true,
                include:[{
                    model: database.Alunos,
                    where:{
                        id: id
                    } 
                }]
            }]
        }); 

        const pessoaId = await database.Pessoas.findOne({
            include:[{
                model:database.Alunos,
                where:{
                    id:id
                }
            }]
        }); 

        

        if(existeAluno == null){
            return res.status(400).json({"msg":"O Aluno nao foi encontrado"})
        }

        try {         

            await database.Enderecos.update(endereco,{
               
                        where:{
                            id: enderecoId.id
                        }                  
               
            }); 
            
            
             await database.Pessoas.update(pessoa,{
               
                    where:{
                        id:pessoaId.id
                    }                
            });  
           
             const alunoRes = await database.Alunos.update(aluno, {
                where:{
                    id:id
                }
            }) 

            return res.status(200).json(enderecoId)
            
        } catch (e) {

            return res.status(500).json(e.message)
            
        }
    }

    static async Delete(req, res){

        const {id} = req.params

        const deleta = {status_aluno: 5}

        try {

            await database.Alunos.update(deleta,{
                where:{
                    id:id
                }
            })

            res.status(201).json({"msg":"Aluno Deletado"})
            
        } catch (e) {

            return res.status(500).json(e.message)

            
        }
        
    }
    

}
module.exports = {AlunoController}