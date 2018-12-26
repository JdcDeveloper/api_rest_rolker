//Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
var rutas = require('./routes/users'); 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
// Configurar CORS
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas
//http://localhost:3000/api/pruebas
// donde rutas es lo que sigue
app.use('/api', rutas);



var mongoose = require('mongoose');

// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3000;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost/db_rolker')
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos  se ha realizado correctamente")
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3000");
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));





// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;




//una forma
// Cargar modulos y crear nueva aplicacion
// var express = require("express"); 
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
// app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados



// var user_routes = require('./routes/usuarios');

// app.use('/api', user_routes);
 
//Ejemplo: GET http://localhost:8080/items
// app.get('/items', function(req, res, next) {
//   if(req.query.filter) {
//    next();
//    return;
//   }
//   res.send('Get all');
// });
 
//Ejemplo: GET http://localhost:8080/items?filter=ABC
// app.get('/items', function(req, res) {
//   var filter = req.query.filter;
//   res.send('Get filter ' + filter);
// });
 
//Ejemplo: GET http://localhost:8080/items/10
// app.get('/items/:id', function(req, res, next) {
//   var itemId = req.params.id;
//   res.send('Get ' + req.params.id);
// });
 
//Ejemplo: POST http://localhost:8080/items
// app.post('/items', function(req, res) {
//    var data = req.body.data;
//    res.send('Add ' + data);
// });
 
//Ejemplo: PUT http://localhost:8080/items
// app.put('/items', function(req, res) {
//    var itemId = req.body.id;
//    var data = req.body.data;
//    res.send('Update ' + itemId + ' with ' + data);
// });
 
//Ejemplo: DELETE http://localhost:8080/items
// app.delete('/items/:id', function(req, res) {
//    var itemId = req.params.id;
//    res.send('Delete ' + itemId);
// });
  
// var server = app.listen(8080, function () {
//     console.log('Server is running..'); 
// });

// module.exports = app;
