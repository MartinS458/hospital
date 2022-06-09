'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VentaSchema = Schema({
    slug: {type: String, required: true},
    precioTotal: {type: Number, required: false},
    descripcion: {type: String, required: false},
    fecha: {type:Date, default: Date.now, require: true},
    estado: {type: String, required: false},    
    createdAt: {type:Date, default: Date.now, require: true},
    productos:[{type: Schema.ObjectId, ref:'producto', required: true}],
});

module.exports = mongoose.model('venta', VentaSchema);