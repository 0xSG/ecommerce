var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objId = schema.Types.ObjectId;

var wishlist= new schema ({
    title:{type:String,default:'Untitled Wishlist'},
    products:[
        {pid:{type:objId,ref:'products'}}
        ],
    uid:{type:objId,ref:"users"}     
});


var model = mongoose.model('wishlists',wishlist);
module.exports = model;