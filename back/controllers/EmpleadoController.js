'use strict'

var Empleado = require('../models/empleado');
var bcrypt = require('bcrypt-nodejs'); //tenemos que encriptar la contraseña
const registro_empleado = async function(req,res){
    //
    var data = req.body;
    var empleados_arr = [];

    empleados_arr = await Empleado.find({dni:data.dni});

    if (empleados_arr.length == 0){        
        //primero verificamos si me envia una contraseña
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err,hash){
                if(hash){    
                    data.password = hash;
                    var reg = await Empleado.create(data);                
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
const login_empleado = async function(req,res){
    var data = req.body;

    var empleados_arr = [];

    empleados_arr = await Empleado.find({email:data.email});
    console.log(empleados_arr);

    if(empleados_arr.length==0){
        res.status(200).send({message:'El correo no existe en la base de datos'});
    }else{
        res.status(200).send({message:'El correo si existe en la base de datos'});
    }

    res.status(200).send({data:data});
}
module.exports = {
    registro_empleado,
    login_empleado
}