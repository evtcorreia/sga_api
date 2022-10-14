const bodyParser = require('body-parser')
 const alunos = require('./alunos')
 const usuarios = require('./usuarios')


module.exports = app=>{
    
        app.use(bodyParser.json()),
        app.use(alunos)
        app.use(usuarios)
     
        
    
}