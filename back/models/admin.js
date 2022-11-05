'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = Schema({
    slug: {type: String, required: false},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    dni: {type: String, required: true},
    rol: {type: String, required: true},
    estado: {type: String, required: false},    
    createdAt: {type:Date, default: Date.now, require: true},

});

module.exports = mongoose.model('admin', AdminSchema);