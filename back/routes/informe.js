'use strict'

var express = require('express');
var productoController = require('../controllers/ProductoController');
var api = express.Router();

api.post('/registro_producto',productoController.registro_producto);
module.exports = api;