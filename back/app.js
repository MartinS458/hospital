'use strict'

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4201;

mongoose.connect('mongodb://127.0.0.1:27017/polleria',{useUnifiedTopology:true, useNewUrlParser:true},(err, res) =>{
    if (err){
        console.log(err);
    }else{
        console.log('Servidor corriendo');
        app.listen(port,function(){
            console.log('Servidor corriendo en el puerto ' + port);
        })
    }
});
module.exports = app;