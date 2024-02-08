const{DataTypes} = require('sequelize');
const sequelize = require('../config/db');


const users = sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:true
    },
    username:{
        type: DataTypes.STRING,
        allownull:false,
    },
    email:{
        type:DataTypes.STRING,
        allownull:false,
    }
});


module.exports = users;