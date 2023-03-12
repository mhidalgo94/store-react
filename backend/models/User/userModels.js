const bcrypt = require('bcrypt');
const { Sequelize,sequelize, DataTypes} = require('../../db/index.js')


const User = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('client', 'admin', 'moderator'),
        allowNull: false,
        defaultValue: 'client'
    },
    is_active:{
        type : DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: false,
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique:true
    }

    });
    User.beforeCreate((user, options)=>{
        const salt = bcrypt.genSalt(10);
        user.password = bcrypt.hashSync(user.password, parseInt(salt))
    });

    User.prototype.checkPassword =function (password){
        return bcrypt.compareSync(password, this.password)
}


 module.exports = User
