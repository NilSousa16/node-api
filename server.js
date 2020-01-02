// Importando o express
const express = require('express');

// Importando o cors
const cors = require('cors');

// Executando a função express
// Iniciando o App
const app = express();

// Permite o envio de dados no formato JSON
app.use(express.json());

// Permite o acesso externo à API
app.use(cors());

// Importando mogoose
const mongoose = require('mongoose');

//Importando require dir para registro de models
const requireDir = require('require-dir');

// Iniciando o DB
// URL + Obj
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

// Registrar model na aplicação
// require('./src/models/Product');

// Registrar pasta de models na aplicação
// Utiliza o require-dir
requireDir('./src/models');

// Rotas
// Recebe todas as requisições
app.use('/api', require('./src/routes'));


// Definindo uma porta a ser escutada
app.listen(3001);

