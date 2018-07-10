var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name must be filled !']
    },
    stock: {
        type: Number,
        required: [true, 'Stock must be filled !']
    },
    price: {
        type: Number,
        required: [true, 'Price must be filled !']
    },
    description: String
});

const Item  = mongoose.model('Item', itemsSchema);
module.exports = Item;