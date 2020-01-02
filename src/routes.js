const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Executado toda vez que o usuário acessar a rota
// Rota raiz, req, res
// req - requisição ao servidor com todos os detalhes existentes
// res - resposta da requisição com todas as informações
routes.get("/products", ProductController.index);

// Executa a rota para recuperar um único registro
routes.get("/products/:id", ProductController.show)

// Executa a rota para inserir elementos via POST
routes.post("/products", ProductController.store);

// Executa a rota para atualização de informações com o método PUT
routes.put("/products/:id", ProductController.update);

// Executa a rota para atualização de informações com o método PUT
routes.delete("/products/:id", ProductController.destroy);

// routes.get('/', (req, res) => {
//     // Product.create({
//     //     title: "React Native",
//     //     description: "Build native apps with React",
//     //     url: "http://github.com/facebook/react-native"
//     // });

//     return res.send('Hello World');
// });

module.exports = routes;