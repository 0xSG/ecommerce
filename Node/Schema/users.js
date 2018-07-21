var mongoose = require('mongoose');
var schema =  mongoose.Schema;
var objId = mongoose.Schema.Types.ObjectId;

var user = new schema({
    name:String,
    email:String,
    Address:String,
    uid:objId
});

var model = mongoose.model('users',user);
module.exports = model;