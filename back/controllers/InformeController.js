'use strict'

var Informe = require('../models/informe');

const registro_informe_admin = async function(req,res){
    var data = req.body;
    
     var reg = await Informe.create(data);
     res.status(200).send({data:reg}); 
    
}


const obtener_informe_admin = async function(req,res){

var id = req.params['id'];           
var reg = await Informe.findById({_id:id});

if(reg){
    res.status(200).send({data:reg});            
}else{
    res.status(500).send({message: 'NoAccess'});
    }
}

const actualizar_informe_admin = async function(req,res){

        var id = req.params['id'];
        var data = req.body;
        var reg = await Informe.findByIdAndUpdate({_id:id},{
            medico : data.medico,
            descripcion : data.descripcion,
            paciente : data.paciente,
            medicamento : data.medicamento,
        })
        if(reg){
        res.status(200).send({data:reg});
    }else{
        res.status(500).send({message: 'NoAccess'});
    }

}


const eliminar_informe_admin = async function(req,res){

       var id = req.params['id'];
       let reg = await Informe.findByIdAndRemove({_id:id});
       if(reg){
       res.status(200).send({data:reg});

    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}
const listar_informe_filtro_admin = async function(req,res){
    let tipo = req.params['tipo'];
    let filtro = req.params['filtro'];
    console.log(tipo);
    if(tipo == null || tipo == 'null'){
        let reg = await Informe.find();
        res.status(200).send({data:reg});
    }else{
        if(tipo == 'medico'){
let reg = await Informe.find({medico:new RegExp(filtro,'i')});
res.status(200).send({data:reg});
        }else if(tipo == 'paciente'){
            let reg = await Informe.find({paciente:new RegExp(filtro,'i')});
            res.status(200).send({data:reg});
        }
    }
   
}
module.exports = {
    actualizar_informe_admin,
    listar_informe_filtro_admin,
    obtener_informe_admin,
    eliminar_informe_admin,
    registro_informe_admin,
}