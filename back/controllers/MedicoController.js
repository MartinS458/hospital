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
}
module.exports = {
    registro_medico,
    listar_medico_filtro_admin,
}