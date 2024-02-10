
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

exports.GetUserByID = async (req,res) =>{

    try{
        const userByid = await user.findByPk(req.params.id)
        if(!userByid){
            res.status(400).send("usuario no econtrado");
        }else{
            res.json(userByid)
        }
    }catch(error){
        console.log(error)
        res.status(500).send("error interno del servidor")
    };
    
};

exports.updateUser = async (req,res) => {

try{
    const userUpdate = await user.findByPk(req.params.id);
    if(!userUpdate){
        res.status(400).send("usuario no encontrado")
    } else {
        await userUpdate.update(req.body);
        res.json(userUpdate)
        }
        }catch(error){
        console.log(error)
        res.status(500).send("erorr en el servidor")
        }

}

exports.DeleteByID = async (req,res) =>{

try {
    const DeleteUser = await user.findByPk(req.params.id);
    if(!DeleteUser){
        res.status(400).send("usuario no encontrado");
    }else {
        await DeleteUser.destroy();
        res.send("usuario eliminado con exito")
    }
    }catch(error){
        res.status(500).send("error interno en el servidor");
    };

};










