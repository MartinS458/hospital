'use strict'

var express = require('express');
var medicoController = require('../controllers/MedicoController');
var api = express.Router();
var auth = require('../middlewares/authenticate');

//api.post('/registro_medico',medicoController.registro_medico);
api.get('/listar_medico_filtro_admin',auth.auth,medicoController.listar_medico_filtro_admin);
api.post('/registro_medico_admin',auth.auth,medicoController.registro_medico_admin);
api.get('/obtener_medico_admin/:id',auth.auth,medicoController.obtener_medico_admin);
api.put('/actualizar_medico_admin/:id',auth.auth,medicoController.actualizar_medico_admin);
api.delete('/eliminar_medico_admin/:id',auth.auth,medicoController.eliminar_medico_admin);
module.exports = api;