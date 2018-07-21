var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objId = schema.Types.ObjectId;

var cart= new schema ({
    id:objId,
    products:[{
        item : {
            type:objId,
            ref:'product'
        }
         }],
    uid:{type:objId, ref:'user'}
    
});

var model = mongoose.model('carts',cart);
module.exports = model;