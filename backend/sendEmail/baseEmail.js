const configEmail = require('../config/configEmail.js')
const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const OAuth2 = google.auth.OAuth2

const OAuth2_Client = new OAuth2(configEmail.clientId, configEmail.clientSecret)
OAuth2_Client.setCredentials({refresh_token : configEmail.refreshToken})

const accessToken = OAuth2_Client.getAccessToken();


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
