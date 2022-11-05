'use strict'

var express = require('express');
var medicoController = require('../controllers/MedicoController');
var api = express.Router();

api.post('/registro_medico',medicoController.registro_medico);
api.get('/listar_medico_filtro_admin',medicoController.listar_medico_filtro_admin);
module.exports = api;