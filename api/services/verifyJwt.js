const jwt = require('jsonwebtoken')
require ('dotenv').config()

const SECRET = process.env.CHAVE_JWT;

function verifyToken(req, res, next){
    const token = req.headers['authorization'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err){
            return res.status(401).end();
        }

        req.id = decoded.id

        next();
    })
}

module.exports = verifyToken