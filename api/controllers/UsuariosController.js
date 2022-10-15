const database = require('./../models')
const bcrypt = require('bcrypt');
const { createHash }  = require ('crypto')
const crypto = require ('crypto')
const jwt = require('jsonwebtoken');
const decodeJwt = require('../services/decodeJwt');
require ('dotenv').config()
const { Op } = require("sequelize");
const moment = require('moment')


const SECRET = process.env.CHAVE_JWT;






class UsuariosController{

    static async cadastrar(req, res){

        const info = await decodeJwt(req)

        

        const dados = req.body

        const cliente_data_nascimento = moment(dados.dt_nascimento).format('YYYY-MM-DD');
        
        const senha  =  dados.senha
        //const email = dados.email

        const senhaHash = await UsuariosController.hashSenha(senha)

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
        escola_id:1 // info.escola,
       
       }

        const usuario= {

            login:dados.login,
            senha: senhaHash,
            cargo_id: dados.cargo_id,
            status_usuario_id: 1,
            createdAt: Date(),
            updatedAt: Date()

        }

      

        try {

            database.sequelize.transaction(async(t)=>{
    
                const enderecoRes = await database.Enderecos.create(endereco, {transaction: t});
                const endereco_id = await enderecoRes.id;
                const pessoaRes = await database.Pessoas.create({...pessoa, endereco_id},{transaction: t}); 
                const pessoa_id = await pessoaRes.id;
                const alunoRes = await database.Usuarios.create({...usuario, pessoa_id},{transaction: t});
                await database.Pivot_Escolas_Pessoas.create({...pivot_escola_pessoas, pessoa_id},{transaction:t})
    
    
                res.status(201).json(pessoa)
    
            })
    
            
        } catch (e) {
    
            return res.status(500).json(e.message)
            
        }
      
    }

    static async hashSenha(senha)
    {
        //const custo = 12;
        //return bcrypt.hash(senha, custo);
        //const salt  = createHash('sha256').update(email).digest('hex')
        const hash =  (await bcrypt.hash(senha, 16)).toString();

        

        

     
        
        return hash;





       
    }


    static async realizaLogin(req, res){


         

        const dados = req.body;

        const login = dados.login;
        const senha = dados.senha

        
        const user =  await UsuariosController.verificaUsuario(login)
        
        
       const valida = false

        if(user !== null){

            const valida = await UsuariosController.verificaSenha(login, senha)

            if(user !== null & valida == true){

                const usuario = await UsuariosController.buscaEscola(login)

                
                const token = jwt.sign({id: usuario.id, escola: usuario.Pessoa.Escolas[0].id, login,autorizacao:usuario.cargo_id},SECRET, {expiresIn: 10000})
                return res.json({auth: true, token})
                
            }

        }

        

      
        
        res.status(400).end() 
    }

    static async verificaUsuario(login){

        const user = await database.Usuarios.findOne({where: {login: login}})

        return user
        
    }

    static async verificaSenha(login, senha){

        const user = await database.Usuarios.findOne({where: {login: login}})

        
        
        const valida  = await bcrypt.compare(senha, user.senha)

        

        return valida
        
    }

    static async buscaEscola(login){
        const usuario = await database.Usuarios.findOne({
            where: {login:login},
            include:[{
                model: database.Pessoas,
                include: [{
                    model: database.Escolas
                }]                  

            }]
        })

        return usuario
    }
}

module.exports = {UsuariosController}