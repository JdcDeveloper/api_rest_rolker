'use strict'
// Cargamos el módulo de mongoose
// var mongoose =  require('mongoose');
// // Usaremos los esquemas
// var Schema = mongoose.Schema;
// // Creamos el objeto del esquema y sus atributos
// var UsuariosSchema = Schema({
//     nombre: String,
//     apellido: String,    
//     email: String,
//     password: String,
//     role: String,
//     fecha: String
    
// });
// // Exportamos el modelo para usarlo en otros ficheros
// module.exports = mongoose.model('Usuarios', UsuariosSchema);

const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const UserSchema = new Schema({


    first_name:{

        type: String,
        required: true

    },


    last_name:{

        type: String,
        required: true

    },




    email:{

        type: String,
        required: true,
        unique: true

    },




    password:{

        type: String,
        required: true

    },

    role:{

        type: String,
        required: true

    },





});



UserSchema.methods.testMethod = function(){




};



module.exports = mongoose.model('users', UserSchema);
