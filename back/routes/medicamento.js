'use strict'

var express = require('express');
var medicamentoController = require('../controllers/MedicamentoController');
var api = express.Router();

//api.post('/registro_medicamento',medicamentoController.registro_medicamento);
api.get('/obtener_medicamento_admin/:id',medicamentoController.obtener_medicamento_admin);
api.get('/listar_medicamento_filtro_admin',medicamentoController.listar_medicamento_filtro_admin);
api.put('/actualizar_medicamento_admin/:id',medicamentoController.actualizar_medicamento_admin);
api.delete('/eliminar_medicamento_admin/:id',medicamentoController.eliminar_medicamento_admin);
api.post('/registro_medicamento_admin',medicamentoController.registro_medicamento_admin);
module.exports = api;