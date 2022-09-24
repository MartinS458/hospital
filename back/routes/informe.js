'use strict'

var express = require('express');
var informeController = require('../controllers/InformeController');
var api = express.Router();

api.post('/registro_informe',informeController.registro_informe);
module.exports = api;