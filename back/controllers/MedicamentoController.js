'use strict'

var Medicamento = require('../models/medicamento');

const registro_medicamento_admin = async function(req,res){
    var data = req.body;
    
     var reg = await Medicamento.create(data);
     res.status(200).send({data:reg}); 
    
}

// const registro_medicamento_admin = async function(req,res){
//     var data = req.body;
//     var reg = await Medicamento.create(data);  
//     if(reg){              
//     res.status(200).send({data:reg});
        
// }else{
//         res.status(500).send({message:'hubo un error en el servidor'});
//     }
// } 

const obtener_medicamento_admin = async function(req,res){

var id = req.params['id'];           
var reg = await Medicamento.findById({_id:id});

if(reg){
    res.status(200).send({data:reg});            
}else{
    res.status(500).send({message: 'NoAccess'});
    }
}

const actualizar_medicamento_admin = async function(req,res){

        var id = req.params['id'];
        var data = req.body;
        var reg = await Medicamento.findByIdAndUpdate({_id:id},{
            producto : data.producto,
            descripcion : data.descripcion,
            precioTotal : data.precioTotal,
        })
        if(reg){
        res.status(200).send({data:reg});
    }else{
        res.status(500).send({message: 'NoAccess'});
    }

}


const eliminar_medicamento_admin = async function(req,res){

       var id = req.params['id'];
       let reg = await Medicamento.findByIdAndRemove({_id:id});
       if(reg){
       res.status(200).send({data:reg});

    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}
const listar_medicamento_filtro_admin = async function(req,res){
    let reg = await Medicamento.find();
    res.status(200).send({data:reg});
}
module.exports = {
    //registro_medicamento,
    actualizar_medicamento_admin,
    listar_medicamento_filtro_admin,
    obtener_medicamento_admin,
    eliminar_medicamento_admin,
    registro_medicamento_admin,
}