const { sequelize, DataTypes} = require('../../db/index.js');
const path = require('path');
const fs = require('fs')
const {pathStaticPublic}= require('../../static/index.js')

const Product = sequelize.define("Product",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    specification: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    images: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
            const images = this.getDataValue('images');
            if(!images){
                return null;
            }
            const baseUrl = process.env.DOMAIN_SERVER + ":" + process.env.PORT + '/public/'
            let urlImages = images.split(',').map(item=> baseUrl + item);
            return urlImages;
          }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    old_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        default: 0,
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique:true
    },
})
// ,{
//     hooks:{
//         afterUpdate:(product,option)=>{
//             console.log('after update')
//         }    
//     },
// })


Product.afterUpdate((record, options)=>{
    const {dataValues,_previousDataValues} = record;
    const recentFiles = dataValues.images;
    const oldFiles = _previousDataValues.images;
    if(recentFiles === oldFiles){
        return
    }
    const listOldFiles = oldFiles.split(',') // separator string path to array path
    const listPathToDelete = [];
    // Make list all route files to delete
    for(const i of listOldFiles){
        const p = path.join(pathStaticPublic, i);
        listPathToDelete.push(p);
    }
    
    if(listPathToDelete.length > 0 ){
        for(const filePath of listPathToDelete){
            fs.unlink(filePath, (error) => {
                if (error) {
                  console.error('Error to delete file in afterUpdate Product Model:', error);
                } else {
                  console.log('Files delete successfully');
                }
            });
        }
    }
})

Product.afterDestroy((record, options)=>{
    console.log('afterDelte**********')
    const {dataValues} = record;
    const oldFiles = dataValues.images;

    const listOldFiles = oldFiles.split(',') // separator string path to array path
    const listPathToDelete = [];
    // Make list all route files to delete
    for(const i of listOldFiles){
        const p = path.join(pathStaticPublic, i);
        listPathToDelete.push(p);
    }
    
    if(listPathToDelete.length > 0 ){
        for(const filePath of listPathToDelete){
            fs.unlink(filePath, (error) => {
                if (error) {
                  console.error('Error to delete file in afterDestroy Product Model:', error);
                } else {
                  console.log('Files delete successfully');
                }
            });
        }
    }
})

module.exports = Product;