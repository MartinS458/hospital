'use strict'

var express = require('express');
var pacienteController = require('../controllers/PacienteController');
var api = express.Router();


api.post('/login_paciente',pacienteController.login_paciente);
api.get('/obtener_paciente_admin/:id',pacienteController.obtener_paciente_admin);
api.get('/listar_paciente_filtro_admin',pacienteController.listar_paciente_filtro_admin);
api.put('/actualizar_paciente_admin/:id',pacienteController.actualizar_paciente_admin);
api.delete('/eliminar_paciente_admin/:id',pacienteController.eliminar_paciente_admin);
api.post('/registro_paciente_admin',pacienteController.registro_paciente_admin);
module.exports = api;