const fs = require('fs');
const handlebars = require('handlebars');
const transporter = require('./baseEmail.js');
const path = require('path');

const { Op } = require('sequelize');
const db = require('../models/index.js');

const User = db.user;



const pathTemplates = path.join(__dirname,'templates' );

function SignInVerifyCode(emailTo,name,code){
    const pathT = path.join(pathTemplates,'verifyCode.html')
    const source = fs.readFileSync(pathT, 'utf-8');
    const template = handlebars.compile(source);

    const htmlEmail = template({name,code})

    let emailOptions = {
        from: 'storebeinspired@gmail.com',
        to:emailTo,
        subject:'Activate your account in our online store',
        html: htmlEmail
    }

    transporter.sendMail(emailOptions,(err,data)=>{
        if(err){
            console.log('Error Email Verfify Code',err)
        }else{
            console.log('Send Email successfully')
        }
    })
}

function CodeRecuveryPassword(emailTo,name,code){
    const pathT = path.join(pathTemplates,'verifyRecoveryPassword.html');
    
    const source = fs.readFileSync(pathT, 'utf-8');
    const template = handlebars.compile(source);

    const htmlEmail = template({name,code})

    let emailOptions = {
        from: 'storebeinspired@gmail.com',
        to:emailTo,
        subject:'Change Password.',
        html: htmlEmail
    }

    transporter.sendMail(emailOptions,(err,data)=>{
        if(err){
            console.log('Error Email Verfify Code',err)
        }else{
            console.log('Send Email successfully')
        }
    })

}

function RegistrationCompleted(emailTo, name){
    const pathT = path.join(pathTemplates,'registerComplete.html');

    const source = fs.readFileSync(pathT, 'utf-8');
    const template = handlebars.compile(source);

    const htmlEmail = template({name})

    let emailOptions = {
        from: 'storebeinspired@gmail.com',
        to:emailTo,
        subject:'Registration completed.',
        html: htmlEmail
    }

    transporter.sendMail(emailOptions,(err,data)=>{
        if(err){
            console.log('Error Email Verfify Code',err)
        }else{
            console.log('Send Email successfully')
        }
    })
}

async function notifyBuyManager(name,link){
    const pathTManager = path.join(pathTemplates,'userBuy.html');
    const sourceManger = fs.readFileSync(pathTManager, 'utf-8');
    const templateManager = handlebars.compile(sourceManger);

    const users =await  User.findAll({
        where: {
            role: {
              [Op.or]: ['admin', 'moderator'],
            },
          },
          attributes: ['email'],
    })
    const emailList = users.map((user) => user.email);
    const htmlEmailManager = templateManager({name,link})

    let emailOptionsManager = {
        from: 'storebeinspired@gmail.com',
        to: emailList,
        subject:'Un usuario ha comprado nuevos products.',
        html: htmlEmailManager
    }


    transporter.sendMail(emailOptionsManager,(err,data)=>{
        if(err){
            console.log('Error Email Verfify Code',err)
        }else{
            console.log('Send Email successfully')
        }
    })
}

function OrderComplete(emailTo,name,link){
    const pathT = path.join(pathTemplates,'orderSales.html');
    const source = fs.readFileSync(pathT, 'utf-8');
    const template = handlebars.compile(source);

    const htmlEmail = template({name,link})

    let emailOptions = {
        from: 'storebeinspired@gmail.com',
        to:emailTo,
        subject:'Sales order completed.',
        html: htmlEmail
    }

    transporter.sendMail(emailOptions,(err,data)=>{
        if(err){
            console.log('Error Email Verfify Code',err)
        }else{
            console.log('Send Email successfully')
        }
    })
    /// envio de correo para notificar manager store
    notifyBuyManager(name,link)

}


function RecoveryPassword(emailTo,name, link){
    const pathT = path.join(pathTemplates,'recoveryPassword.html');
    const source = fs.readFileSync(pathT, 'utf-8');
    const template = handlebars.compile(source);

    const htmlEmail = template({name,link})

    let emailOptions = {
        from: 'storebeinspired@gmail.com',
        to:emailTo,
        subject:'Reset Password.',
        html: htmlEmail
    }

    transporter.sendMail(emailOptions,(err,data)=>{
        if(err){
            console.log('Error Email Reset Password',err)
        }else{
            console.log('Send Email successfully')
        }
    })
}

module.exports = { 
    SignInVerifyCode,
    CodeRecuveryPassword,
    RegistrationCompleted,
    OrderComplete,
    RecoveryPassword
}