'use strict'

var express = require('express');
var informeController = require('../controllers/InformeController');
var api = express.Router();

//api.post('/registro_informe',informeController.registro_informe);
api.post('/registro_informe_admin',informeController.registro_informe_admin);
module.exports = api;