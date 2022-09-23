'use strict'

var Paciente = require('../models/paciente');
var bcrypt = require('bcrypt-nodejs'); //tenemos que encriptar la contraseña
var jwt = require('../helpers/jwt');
const registro_paciente = async function(req,res){
    //
    var data = req.body;
    var paciente_arr, paciente_arr2 = [];

    paciente_arr = await Paciente.find({dni:data.dni});
    paciente_arr2 = await Paciente.find({email:data.email});

    if (paciente_arr.length ==0 && paciente_arr2.length == 0){        
        //primero verificamos si me envia una contraseña
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err,hash){
                if(hash){    
                    data.password = hash;
                    var reg = await Paciente.create(data);                
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
const login_paciente = async function(req,res){
    var data = req.body;

    var paciente_arr = [];

    paciente_arr = await Paciente.find({email:data.email});
    console.log(paciente_arr);

    if(paciente_arr.length==0){
        res.status(200).send({message:'El correo no existe en la base de datos'});
    }else{
        let user = paciente_arr[0];
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
    registro_paciente,
    login_paciente
}