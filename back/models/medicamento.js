'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicamentoSchema = Schema({
    slug: {type: String, required: false},
    precioTotal: {type: Number, required: true},
    descripcion: {type: String, required: true},
    fecha: {type:Date, require: false},
    estado: {type: String, required: false},    
    createdAt: {type:Date, default: Date.now, require: true},
    productos:[{type: Schema.ObjectId, ref:'producto', required: false}],
});

module.exports = mongoose.model('medicamento', MedicamentoSchema);