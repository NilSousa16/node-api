// Responsável pelas operações existentes em um model

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // Rota para busca dos dados
    async index(req, res) {
        // Recupera os dados com paginação
        // Desestruturação para passar números de páginas como argumento 
        const { page = 1} = req.query; //{ page } - também pode ser sem parâmetro
        const products = await Product.paginate({}, {page, limit: 10});

        // Sem passar número de páginas como argumento
        // Product.paginate(<objeto/filtros necessários>, {<página inicial>, <qtd por página>});
        //const products = await Product.paginate({}, {page: 1, limit: 10});

        // Recupera os dados sem paginação
        //const products = await Product.find();

        return res.json(products);
    },

    // Rota para os detalhes
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Rota para armazenamento
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Rota para busca e atualização de objeto
    async update(req, res) {
        // findByIdAndUpdate(<parametros>, <info para atualizar>, <retornar valor atualizado>)
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    // Rota para remover elemento pelo id
    async destroy(req, res) {
        // Elemento não é armazenado em 'product' por não haver necessidade
        await Product.findByIdAndRemove(req.params.id);

        // Retorna uma resposta de OK sem conteúdo
        return res.send();
    }
}

 // Product.create({
    //     title: "React Native",
    //     description: "Build native apps with React",
    //     url: "http://github.com/facebook/react-native"
    // });