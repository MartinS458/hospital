'use strict'

var Medico = require('../models/medico');
const registro_medico = async function(req,res){
    //
    var data = req.body;
    
    var reg = await Medico.create(data);
    res.status(200).send({data:reg});
    
}

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

        }

    }
}
module.exports = {
    registro_medico,
    listar_medico_filtro_admin,
    registro_medico_admin
}