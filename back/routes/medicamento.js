'use strict'

var express = require('express');
var ventaController = require('../controllers/VentaController');
var api = express.Router();

api.post('/registro_venta',ventaController.registro_venta);
module.exports = api;