'use strict'

var express = require('express');
var cajaController = require('../controllers/CajaController');
var api = express.Router();

api.post('/registro_caja',cajaController.registro_caja);
module.exports = api;