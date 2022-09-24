'use strict'

var express = require('express');
var medicoController = require('../controllers/MedicoController');
var api = express.Router();

api.post('/registro_medico',medicoController.registro_medico);
module.exports = api;