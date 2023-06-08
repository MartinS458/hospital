'use strict'

var Medico = require('../models/medico');

 const listar_medico_filtro_admin = async function(req,res){
    let reg = await Medico.find();
    res.status(200).send({data:reg});
    // console.log(req.user);
    // if(req.user){
    //     if(req.user.role == 'admins'){
    //         let tipo = req.params['tipo'];    
    //         let filtro = req.params['filtro'];

    //         console.log(tipo);

    //         if(tipo == null || tipo == 'null'){
    //             let reg = await Medico.find();
    //             res.status(200).send({data:reg});
    //         }else{
    //             if(tipo == 'apellidos'){
    //                 let reg = await Medico.find({apellidos:new RegExp(filtro,'i')});
    //                 res.status(200).send({data:reg});
    //             }else if(tipo == 'correo'){
    //                 let reg = await Medico.find({email:new RegExp(filtro,'i')});
    //                 res.status(200).send({data:reg});
    //             }
    //         }
    //     }else{
    //         res.status(500).send({message: 'NoAccess'});
    //     }
    // }else{
    //     res.status(500).send({message: 'NoAccess'});
    // }

    
}
const registro_medico_admin = async function(req,res){
    if(req.user){
        if(req.user.role == 'admin'){
            var data= req.body;
            let reg = await Medico.create(data);
            res.status(200).send({data:reg});
            
        }else{
            res.status(500).send({message:'hubo un error en el servidor'});
        }

    }
}
const obtener_medico_admin = async function(req,res){
    if(req.user){
                if(req.user.role == 'admin'){

                    var id = req.params['id'];
                    try {
                        var reg = await Medico.findById({_id:id});
                    res.status(200).send({data:reg});
                    } catch (error) {
                        res.status(200).send({data:undefined});
                    }
                }else{
                    res.status(500).send({message: 'NoAccess'});
                }
        
            }else{
                res.status(500).send({message: 'NoAccess'});
            }
}
const actualizar_medico_admin = async function(req,res){
    if(req.user){
        if(req.user.role == 'admin'){

            var id = req.params['id'];
            var data = req.body;
            var reg = await Medico.findByIdAndUpdate({_id:id},{
                nombre : data.nombre,
                apellido : data.apellido,
                email : data.email,
                dni : data.dni,
                genero : data.genero
            })
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }

    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const eliminar_medico_admin = async function(req,res){
    if(req.user){
        if(req.user.role == 'admin'){

           var id = req.params['id'];
           let reg = await Medico.findByIdAndRemove({_id:id});
           res.status(200).send({data:reg});

        }else{
            res.status(500).send({message: 'NoAccess'});
        }

    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}
module.exports = {
    listar_medico_filtro_admin,
    registro_medico_admin,
    obtener_medico_admin,
    actualizar_medico_admin,
    eliminar_medico_admin
}