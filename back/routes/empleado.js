'use strict'

var express = require('express');
var empleadoController = require('../controllers/EmpleadoController');
var api = express.Router();

api.post('/registro_empleado',empleadoController.registro_empleado);
api.post('/login_empleado',empleadoController.login_empleado);
module.exports = api;