'use strict'
// Cargamos los modelos para usarlos posteriormente
var Users = require('../models/Users');

var md5 = require('md5');

const mongoose = require('mongoose');

// var app = require('express')();
// var bodyParser = require('body-parser');

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded




function getUsers(req, res){

    // de esta forma se traen todos los registros
    // entre llaves {}
    Users.find({ }, (err, user) => {

        // en json tambien
        res.send(user);

    //devuelvo en json
    // res.json(usuario); 

});

    
}

function add(req, res){


  //   var users = new Users(
  // {
  //   first_name: 'maria',
  //   last_name: 'chacon',
  //   email: 'maria@hotmail.com',
  //   password: md5('123'),
  //   role: 'user'
  // }
  // );

  var users = new Users(
  {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role
  }
  );

  users.save(users).then(savedRegister=>{

            
            res.send("registrado");


        });


}

function getUsersById(req, res){


    // importante el objeto id sebe ser string
    console.log(typeof(req.params.id));
    var id =req.params.id

    console.log(id);

    
    Users.findById( id, (err, user) => {
        
        res.send(user);
         

});

    
}



function deleteUsers(req, res){

    // pasando parametros por params y body

//      Users.findOneAndRemove({_id: req.params.id}, req.body.id, function(err,data)
// {
//     if(!err){
//         console.log("Deleted");
//     }
// });



 Users.findOneAndRemove(req.body.id, function(err,data)
{
    if(!err){
        console.log("Deleted");
    }
});

    
}







// Creamos un método en el controlador, en este caso una accion de pruebas
// function pruebas(req, res){

//     // Devolvemos una respuesta en JSON
//         res.status(200).send({
//             menssage: 'Esta ruta es de prueba en mi api restful con mongo y node'
//         });
//     }

   //Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
//    exportarlo para poder usarlo en las rutas por ejemplo
module.exports = {
    getUsers,
    add,
    deleteUsers,
    getUsersById
};
