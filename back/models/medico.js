'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicoSchema = Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    dni: {type: String, required: true},
    genero: {type: String, required: false},
    createdAt: {type:Date, default: Date.now, require: true}
    // gastos: {type: Number, required: true},
    // retiro: {type: Number, required: true},
    // montoTotal: {type: Number, required: false},
    // estado: {type: String, required: false},    
    // fecha: {type:Date, require: false},
    // ventas:[{type: Schema.ObjectId, ref:'venta', required: false}],
});

module.exports = mongoose.model('medico', MedicoSchema);