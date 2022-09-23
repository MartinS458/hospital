'use strict'

var Producto = require('../models/producto');
const registro_producto = async function(req,res){
    //
    var data = req.body;
    
    var reg = await Producto.create(data);
    res.status(200).send({data:reg}); 
    
}
module.exports = {
    registro_producto,
}