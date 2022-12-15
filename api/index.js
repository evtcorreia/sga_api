const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')


const app = express()


app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    res.header("Access-Control-Allow-headers", "Content-Type, Authorization, X-Requested-With")

    next()
})

app.use(bodyParser.json())




app.use(bodyParser.json())

const port = 3058

routes(app)

app.get('/teste', (req, res) => res

    .status(200)
    .send({msg:"Bem vindo"})


    
)

app.listen(port, ()=>{
    console.log(`Servido rodando na porta ${port}`);
})

module.exports = app