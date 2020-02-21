require('marko/node-require').install();
require('marko/express');

const express = require("express");
// instalamos o modulo express, entao devemos conseguir acessar esse pacote, utilizando o mesmo nome solicitado para o npm instalar
// o que retorna do require("express") é uma função, então precisamos chamá-la
const app = express();
// chamamos a função retornada e recebemos um objeto do express que podemos utilizar para configurar nossa aplicação
const bodyParser = require('body-parser');

app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
// configura o documento com as rotas
rotas(app);
// faz com que rotas receba como parâmetro o objeto app

module.exports = app;
// faz com que o módulo exporte a constante app