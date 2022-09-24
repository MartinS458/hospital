'use strict'

var express = require('express');
var medicamentoController = require('../controllers/MedicamentoController');
var api = express.Router();

api.post('/registro_medicamento',medicamentoController.registro_medicamento);
module.exports = api;