var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objID = mongoose.Schema.Types.ObjectId;
var product = new schema({
    title:String,
    price:Number,
    description:{type:String , default:'No description available for this product.'},
    imgSrc:{type:String ,default:'null'},
    cat:String
});

var model = mongoose.model('products',product);
module.exports = model;