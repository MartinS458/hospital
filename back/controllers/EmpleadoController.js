'use strict'

var Empleado = require('../models/empleado');
var bcrypt = require('bcrypt-nodejs'); //tenemos que encriptar la contraseña
var jwt = require('../helpers/jwt');
const registro_empleado = async function(req,res){
    //
    var data = req.body;
    var empleados_arr, empleados_arr2 = [];

    empleados_arr = await Empleado.find({dni:data.dni});
    empleados_arr2 = await Empleado.find({email:data.email});

    if (empleados_arr.length ==0 && empleados_arr2.length == 0){        
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
        let user = empleados_arr[0];
        bcrypt.compare(data.password, user.password, async function(error,check){

        if(check){
            res.status(200).send({data:user,
                token: jwt.createToken(user)
            });
        }else{
            res.status(200).send({message:'la contraseña no es correcta',data:undefined});
        }
        });
    
    }

}
module.exports = {
    registro_empleado,
    login_empleado
}