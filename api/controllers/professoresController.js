const database = require('./../models')
const decodeJwt = require('../services/decodeJwt');
const { UsuariosController } = require('./UsuariosController');


class ProfessorController {


    static async Lista(req, res) {

        const info = await decodeJwt(req)


        try {

            const lista = await database.Professores.findAll({

                include: [{
                    model: database.Pessoas,
                    include: [{
                        model: database.Escolas,
                        where: {
                            id: info.escola
                        }
                    }]

                }]
            })
            return res.status(200).json(lista)

        } catch (e) {

            return res.status(500).json(e.message)

        }
    }

    static async Matricular(req, res) {

        const info = await decodeJwt(req)

        
        const dados = req.body;
        
        const senhaHash = await UsuariosController.hashSenha(dados.senha)
        const endereco = {

            logradouro: dados.logradouro,
            bairro: dados.bairro,
            numero: dados.numero,
            complmento: dados.complmento,
            municipio_id: 1,
            createdAt: Date(),
            updatedAt: Date()
        }
        const pessoa = {
            nome: dados.nome,
            cpf: dados.cpf,
            dt_nascimento: dados.dt_nascimento,
            status_pessoa_id: 1,
            createdAt: Date(),
            updatedAt: Date()


        }
        const pivot_escola_pessoas = {
            escola_id: info.escola,

        }
        const professor = {
            masp: dados.masp,
            status_professor_id: 1
        }

        const usuario = {
            login: dados.login,
            senha: senhaHash,
            cargo_id: 2,
            status_usuario_id: 1
        }

        try {

            database.sequelize.transaction(async (t) => {

                const enderecoRes = await database.Enderecos.create(endereco, { transaction: t });
                const endereco_id = await enderecoRes.id;
                const pessoaRes = await database.Pessoas.create({ ...pessoa, endereco_id }, { transaction: t });
                const pessoa_id = await pessoaRes.id;
                const professorRes = await database.Professores.create({ ...professor, pessoa_id }, { transaction: t })
                const usuarioRes = await database.Usuarios.create({ ...usuario, pessoa_id }, { transaction: t })
                await database.Pivot_Escolas_Pessoas.create({ ...pivot_escola_pessoas, pessoa_id }, { transaction: t })


                res.status(201).json(pessoa)

            })


        } catch (e) {

            return res.status(500).json(e.message)

        }


    }

    static async Buscar(req, res) {

        const { id } = req.params;

        console.log(id);


        const dados = req.body;


        try {


            const aluno = await database.Professores.findOne({
                where: {

                    id: id
                },

                include:[{

                    model:database.Pessoas,
                    include:[{
                        model: database.Escolas
                    },
                    {
                        model:database.Enderecos
                    }
                ]

                }
            
            
            
            
            ]
               


            })
            res.status(200).json(aluno)


        } catch (e) {

            return res.status(500).json(e.message)

        }





    }

    static async Alterar(req, res) {

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
            cpf: dados.cpf,
            dt_nascimento: dados.dt_nascimento,
            status_pessoa_id: 1,
            createdAt: Date(),
            updatedAt: Date()


        }
        const pivot_escola_pessoas = {
            escolas_id: 1,
            pessoas_id: 1
        }
      /*   const aluno = {
            dt_matricula: Date(),
            status_aluno: 1
        } */

        const existeAluno = await database.Professores.findOne({
            where: {
                id: id
            }
        })

        const enderecoId = await database.Enderecos.findOne({
            include: [{
                model: database.Pessoas,
                right: true,
                include: [{
                    model: database.Alunos,
                    where: {
                        id: id
                    }
                }]
            }]
        });

        const pessoaId = await database.Pessoas.findOne({
            include: [{
                model: database.Alunos,
                where: {
                    id: id
                }
            }]
        });



        if (existeAluno == null) {
            return res.status(400).json({ "msg": "O Professor nao foi encontrado" })
        }

        try {

            await database.Enderecos.update(endereco, {

                where: {
                    id: enderecoId.id
                }

            });


            await database.Pessoas.update(pessoa, {

                where: {
                    id: pessoaId.id
                }
            });

           /*  const alunoRes = await database.Alunos.update(aluno, {
                where: {
                    id: id
                }
            }) */

            return res.status(200).json(enderecoId)

        } catch (e) {

            return res.status(500).json(e.message)

        }
    }

    static async Delete(req, res) {

        const { id } = req.params

        const deleta = { status_aluno: 5 }

        try {

            await database.Alunos.update(deleta, {
                where: {
                    id: id
                }
            })

            res.status(201).json({ "msg": "Aluno Deletado" })

        } catch (e) {

            return res.status(500).json(e.message)


        }

    }

    static async AlocarProfessor(req, res){


        const dados = req.body;

        const {id} = req.params

        const pivot = {
            turmas_id: dados.turmas_id,
            professores_id: id
        }

        try {

            database.sequelize.transaction(async (t) => {

                const enderecoRes = await database.Pivot_Professores_Turmas.create(pivot, { transaction: t });
               
                                
            })
            
            res.status(201).json(pivot)
            
        } catch (e) {

            res.send(500).json(e.message)
            
        }
    }

   

}
module.exports = { ProfessorController }