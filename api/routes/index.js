const bodyParser = require('body-parser')
 const alunos = require('./alunos')
 const usuarios = require('./usuarios')
 const salas = require('./Salas')


module.exports = app=>{
    
        app.use(bodyParser.json()),
        app.use(alunos)
        app.use(usuarios)
        app.use(salas)
     
        
    
}