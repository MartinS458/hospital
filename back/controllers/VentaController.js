'use strict'

var Venta = require('../models/venta');
const registro_venta = async function(req,res){
    //
    var data = req.body;
    
    var reg = await Venta.create(data);
    res.status(200).send({data:reg}); 
    
}
module.exports = {
    registro_venta,
}