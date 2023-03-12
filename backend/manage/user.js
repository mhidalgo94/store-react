const  prompt = require("prompt-sync")({ sigint: true })
const {sequelize} = require('../db/index.js');
const User = require('../models/User/userModels.js')


const firstName = prompt('Insert First Name: ')
const lastName = prompt('Insert Last Name: ')
const email = prompt('Insert e-mail: ')
const phone = prompt('Insert phone: ')
const address = prompt('Insert address: ')
const password = prompt('Insert password: ')
const role = prompt('Role user: ')

User.create({firstName, lastName,email,password,phone,address,role})