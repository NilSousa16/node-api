const mongoose = require('mongoose');
// Usado para paginação dos dados
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Usado para paginação dos dados
ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);