'use strict'

var Empleado = require('../models/empleado');
const registro_empleado = async function(req,res){
    //
    res.status(200).send({message:'Hola mundo'});
}
module.exports = {
    registro_empleado,
}