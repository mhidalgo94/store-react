const configEmail = require('../config/configEmail.js')
const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const OAuth2 = google.auth.OAuth2

const OAuth2_Client = new OAuth2(configEmail.clientId, configEmail.clientSecret)//"https://developers.google.com/oauthplayground")
OAuth2_Client.setCredentials({refresh_token : configEmail.refreshToken})

let accessToken = OAuth2_Client.getAccessToken();


// Función para refrescar el token de acceso
async function refreshAccessToken() {
  try {
    const { credentials } = await OAuth2_Client.refreshAccessToken();
    const newAccessToken = credentials.access_token;
    // Actualizar el token de acceso en tu configuración o donde sea necesario
    accessToken = newAccessToken;
    console.log('Token de acceso actualizado:', newAccessToken);
  } catch (error) {
    console.error('Error al refrescar el token de acceso:', error.message);
  }
}

 // Verificar si el token de acceso ha expirado
if (OAuth2_Client.isTokenExpiring())  {
   refreshAccessToken();
}


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type:'OAuth2',  
      user: configEmail.user,
      clientId: configEmail.clientId,
      clientSecret:configEmail.clientSecret,
      refreshToken: configEmail.refreshToken,
      accessToken
    },
  });
module.exports= transporter;
