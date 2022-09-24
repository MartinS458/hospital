'use strict'

var express = require('express');
var pacienteController = require('../controllers/PacienteController');
var api = express.Router();

api.post('/registro_paciente',pacienteController.registro_paciente);
api.post('/login_paciente',pacienteController.login_paciente);
module.exports = api;