'use strict'

var Admin = require('../models/admin');
var bcrypt = require('bcrypt-nodejs'); //tenemos que encriptar la contraseña
var jwt = require('../helpers/jwt');
const registro_admin = async function(req,res){
    //
    var data = req.body;
    var admins_arr, admins_arr2 = [];


    admins_arr = await Admin.find({dni:data.dni});
    admins_arr2 = await Admin.find({email:data.email});

    if (admins_arr.length ==0 && admins_arr2.length  == 0){        
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
        res.status(200).send({message:'El correo o el dni ya existe en la base de datos', data:undefined});
    }
}
const login_admin = async function(req,res){
    var data = req.body;

    var admins_arr = [];
    
    admins_arr = await Admin.find({email:data.email});
    console.log(admins_arr);

    if(admins_arr.length==0){
        res.status(200).send({message:'El correo no existe en la base de datos'});
    }else{
        let user = admins_arr[0];
        bcrypt.compare(data.password, user.password, async function(error,check){

        if(check){
           console.log(user);
            res.status(200).send({
                data:user,
                token: jwt.createToken(user)
           });
        }else{
            res.status(200).send({message:'la contraseña no es correcta',data:undefined});
        }
        });
    
    }
}
module.exports = {
    registro_admin,
    login_admin
}