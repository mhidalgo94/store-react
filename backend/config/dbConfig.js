
const HOST = process.env.DB_HOST || 'localhost';
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;


module.exports={
    HOST,
    USER,
    PASSWORD,
    DB_NAME,
    dialect: 'mysql'
}