const jwt = require('jsonwebtoken')

function decodeJwt(req){

    const header = req.headers;          
        
    const chaveDecodificada = jwt.decode(header.authorization);

    return chaveDecodificada
}

module.exports = decodeJwt