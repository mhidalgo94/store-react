const express = require('express');
const auth = require('../Auth/auth');
const db = require('../../models/index.js');

const User = db.user;

// Función para buscar un usuario por correo electrónico
async function findByEmail(email){
    const users = await User.findAll({})

    return users.find(user=>user.email === email) 
}

// Función para buscar un usuario por ID
function findById(users,id) {
    return user.find(user => user.id === id);
}

const Login = async (req, res)=>{
    try{
        const { email, password } = req.body;

        // Busca al usuario en la base de datos por su correo electrónico
        const user = await findByEmail(email);
        //  // Verifica si la contraseña es correcta
        if (!user || !auth.checkPassword(password, user.password)) {
            return res.status(401).json({ message: 'Email or password incorrect.' });
        }

        // // Genera un token JWT
        const token = auth.generateToken(user);

        // // Envía el token como respuesta
        res.status(200).json({message:"Authentication successfully",token})
        
    }catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}

module.exports = { Login }