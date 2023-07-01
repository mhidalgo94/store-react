const fs = require('fs');
const handlebars = require('handlebars');
const transporter = require('./baseEmail.js');
const path = require('path');


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