'use strict'

var Medicamento = require('../models/medicamento');
const registro_medicamento = async function(req,res){
    //
    var data = req.body;
    
    var reg = await Medicamento.create(data);
    res.status(200).send({data:reg}); 
    
}
module.exports = {
    registro_medicamento,
}