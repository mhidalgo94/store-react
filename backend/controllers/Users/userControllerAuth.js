const auth = require('../Auth/auth');
const db = require('../../models/index.js');

const User = db.user;

// Buscar un usuario por correo electrónico
function findByEmail(users,email){
    return users.find(user=>user.email === email);
}
// Verifica si el usario es act
function findByActivated(users){
    return users.find(user=>user.is_active === true);
}
// Buscar un usuario por ID
function findById(users,id) {
    return user.find(user => user.id === id);
}

const Login = async (req, res)=>{
    try{
        const { email, password } = req.body;
        // Busca al usuario en la base de datos por su correo electrónico
        const user = await User.findOne({where:{email}})
        if(!user){
            return res.status(404).json({message:"Your user account does not exist."})
        }
        if(!user.is_active){
            return res.status(404).json({message:"Your account needs to be verified."})
        }

        //  // Verifica si la contraseña es correcta
        if (!user || !auth.checkPassword(password, user.password)) {
            return res.status(401).json({ message: 'Your password is incorrect.' });
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