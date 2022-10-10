const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())

const port = 3050

app.get('/teste', (req, res) => res

    .status(200)
    .send({msg:"Bem vindo"})


    
)

app.listen(port, ()=>{
    console.log(`Servido rodando na porta ${port}`);
})

module.exports = app