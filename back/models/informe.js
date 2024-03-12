'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InformeSchema = Schema({
    paciente: {type: String, required: true},
    medico: {type: String, required: true},
    medicamento: {type: String, required: true},
    descripcion: {type: String, required: true},    
    createdAt: {type:Date, default: Date.now, require: true},
});

module.exports = mongoose.model('informe', InformeSchema);