'use strict'

var Admin = require('../models/admin');
var bcrypt = require('bcrypt-nodejs'); //tenemos que encriptar la contraseña
const registro_admin = async function(req,res){
    //
    var data = req.body;
    var admins_arr = [];

    admins_arr = await Admin.find({dni:data.dni});

    if (admins_arr.length == 0){        
        //primero verificamos si me envia una contraseña
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err,hash){
                if(hash){    
                    data.password = hash;
                    var reg = await Admin.create(data);                
                    res.status(200).send({data:reg});
                }else{
                    res.status(200).send({message:'Error Server', data:undefined});            
                }
            })
        }else{
            res.status(200).send({message:'No hay una contraseña', data:undefined});    
        }


    }else{
        res.status(200).send({message:'El correo ya existe en la base de datos', data:undefined});
    }
}
module.exports = {
    registro_admin,
}