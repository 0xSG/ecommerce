var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objId = schema.Types.ObjectId;

var cart= new schema ({
    products:[
        {pid:{type:objId,ref:'products'}}
        ],
    uid:{type:objId, ref:'users'}
    
});

var model = mongoose.model('carts',cart);
module.exports = model;