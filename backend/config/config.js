
const PORT = process.env.PORT || 3000


const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT || 'clave-secreta'
const EXPIRES_IN_JWT = process.env.EXPIRES_IN_JWT ||  "1h"

module.exports ={
    PORT,
    SECRET_KEY_JWT,
    EXPIRES_IN_JWT
}