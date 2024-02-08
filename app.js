const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(bodyParser.json());

app.use('/user', userRoutes);


sequelize.sync().then(() =>{
    console.log("conexion exitosa a la base de datos")
})


app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})