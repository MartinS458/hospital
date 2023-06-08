'use strict'

var Paciente = require('../models/paciente');
var bcrypt = require('bcrypt-nodejs'); //tenemos que encriptar la contraseña
var jwt = require('../helpers/jwt');
const listar_paciente_filtro_admin = async function(req,res){
    let reg = await Paciente.find();
    res.status(200).send({data:reg});
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
const registro_paciente_admin = async function(req,res){
        var data = req.body;
        var paciente_arr, paciente_arr2 = [];

        paciente_arr = await Paciente.find({dni:data.dni});
        paciente_arr2 = await Paciente.find({email:data.email});
        
    if(paciente_arr.length ==0 && paciente_arr2.length == 0){
        var reg = await Paciente.create(data);                
        res.status(200).send({data:reg});
            
    }else{
            res.status(500).send({message:'hubo un error en el servidor'});
        }
} 

const obtener_paciente_admin = async function(req,res){
   
    var id = req.params['id'];           
    var reg = await Paciente.findById({_id:id});

    if(reg){
        res.status(200).send({data:reg});            
    }else{
        res.status(500).send({message: 'NoAccess'});
        }
}

const actualizar_paciente_admin = async function(req,res){
    
            var id = req.params['id'];
            var data = req.body;
            var reg = await Paciente.findByIdAndUpdate({_id:id},{
                nombre : data.nombre,
                apellido : data.apellido,
                email : data.email,
                dni : data.dni,
                genero : data.genero
            })
            if(reg){
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }

}


const eliminar_paciente_admin = async function(req,res){
  
           var id = req.params['id'];
           let reg = await Paciente.findByIdAndRemove({_id:id});
           if(reg){
           res.status(200).send({data:reg});

        }else{
            res.status(500).send({message: 'NoAccess'});
        }
}


module.exports = {
    login_paciente,
    actualizar_paciente_admin,
    listar_paciente_filtro_admin,
    obtener_paciente_admin,
    eliminar_paciente_admin,
    registro_paciente_admin,
}