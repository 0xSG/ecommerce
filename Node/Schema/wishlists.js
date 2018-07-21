var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objId = schema.Types.ObjectId;

var wishlist= new schema ({
    title:String,
    id:objId,
    products:[{
        item : String
         }],
    uid:objId     
});


var model = mongoose.model('wishlists',wishlist);
module.exports = model;