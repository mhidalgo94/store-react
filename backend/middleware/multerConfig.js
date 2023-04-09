const multer = require('multer');
const fs = require('fs');
const path = require('path');
const {pathStaticPublic} = require('../static/index.js')



const storagePublicUser = multer.diskStorage({
  destination: function(req, file, cb) {
    const user = req.user.email.split('@');
    const username = user[0];
    const pathUser = path.join(pathStaticPublic, 'user',username);
    if(!fs.existsSync(pathUser)){
        fs.mkdirSync(pathUser);
    }
    cb(null, pathUser);
  },
  filename: function(req, file, cb) {
    const date = new Date();
    const stringDate = date.getMonth() + "-" +  date.getDate() + "-" + date.getFullYear();
    cb(null, stringDate + "&" + file.originalname);
  }
});

const uploadPublic = multer({storage:storagePublicUser}) 

module.exports = { uploadPublic }