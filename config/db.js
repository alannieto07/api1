const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
        "username":"root",
        "password":"root",
        "database":"api_sequelize",
        "host":"localhost",
        "dialect": "mysql",
});

module.exports= sequelize; 