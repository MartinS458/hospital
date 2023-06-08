'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PacienteSchema = Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    dni: {type: String, required: true},
    //activo: {type: String, required: false},    
    createdAt: {type:Date, default: Date.now, require: true},
    genero: {type: String, required: false},

});

module.exports = mongoose.model('paciente', PacienteSchema);