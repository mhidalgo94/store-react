const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY_JWT,EXPIRES_IN_JWT } = require('../../config/config.js');


// Función para verificar si la contraseña es correcta
function checkPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

  // Función para generar un token JWT
function generateToken(user) {
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    };
    const token = jwt.sign(payload,SECRET_KEY_JWT,{expiresIn:String(EXPIRES_IN_JWT)});
    return token
}

module.exports = { checkPassword, generateToken };