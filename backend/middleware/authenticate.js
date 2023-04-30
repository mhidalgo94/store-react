const jwt = require('jsonwebtoken');
const config = require('../config/config.js');


function authenticated(req,res,next){
    try{
        // Obtiene el token JWT de la cabecera Authorization
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        // console.log({"Token auth":token})
        if(!token){
            return res.status(401).json({message:"Token not provided.Require authentication."})
        }
        // Verifica y decodifica el token
        const decoded = jwt.verify(token, config.SECRET_KEY_JWT);

        // Agrega el usuario al objeto de solicitud para que esté disponible en rutas protegidas
        req.user = decoded;

        next();
    }catch(err){
        console.error(err);
        // return res.status(401).json({message:"Token invalid"})
        return res.status(401).json({message:"User session expired"})
    }
}

module.exports = {authenticated}