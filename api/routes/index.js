const bodyParser = require('body-parser')
 const alunos = require('./alunos')
 const usuarios = require('./usuarios')
 const salas = require('./Salas')
 const anoLetivo = require('./anoLetivo')
 const series = require('./series')
 const turmas = require('./turmas')


module.exports = app=>{
    
        app.use(bodyParser.json()),
        app.use(alunos)
        app.use(usuarios)
        app.use(salas)
        app.use(anoLetivo)
        app.use(series)
        app.use(turmas)

     
        
    
}