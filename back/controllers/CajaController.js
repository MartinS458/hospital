'use strict'

var Caja = require('../models/caja');
const registro_caja = async function(req,res){
    //
    var data = req.body;
    
    var reg = await Caja.create(data);
    res.status(200).send({data:reg});
    
}
module.exports = {
    registro_caja,
}