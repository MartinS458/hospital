'use strict'

var Informe = require('../models/informe');
const registro_informe = async function(req,res){
    //
    var data = req.body;
    
    var reg = await Informe.create(data);
    res.status(200).send({data:reg}); 
    
}
module.exports = {
    registro_informe,
}