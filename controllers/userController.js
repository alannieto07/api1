const user = require('../models/user');

exports.createUser = async (req,res) =>{
    try{
        const newUser = await user.create(req.body);
        res.status(201).json("usuario guardado")
    }catch(error){
        console.error(error)
        res.status(500).send("error interno del servidor");
    }

}
    
exports.getAllUsers = async (req,res) =>{
    try{
        const users = await user.findAll();
        res.json(users);
    }catch(error){
        console.log(error);
        res.status(500).send('error interno del servidor');
    }
};



