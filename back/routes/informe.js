'use strict'

var express = require('express');
var informeController = require('../controllers/InformeController');
var api = express.Router();

api.get('/obtener_informe_admin/:id',informeController.obtener_informe_admin);
api.get('/listar_informe_filtro_admin/:tipo/:filtro?',informeController.listar_informe_filtro_admin);
api.put('/actualizar_informe_admin/:id',informeController.actualizar_informe_admin);
api.delete('/eliminar_informe_admin/:id',informeController.eliminar_informe_admin);
api.post('/registro_informe_admin',informeController.registro_informe_admin);
module.exports = api;