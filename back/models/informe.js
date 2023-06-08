'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InformeSchema = Schema({
    pacientenombre: {type: String, required: true},
    mediconombre: {type: String, required: true},
    medicamentonombre: {type: String, required: true},
    descripcion: {type: String, required: true},    
    createdAt: {type:Date, default: Date.now, require: true},
});

module.exports = mongoose.model('informe', InformeSchema);