// Libraries
var express = require('express');
var body_parser = require('body-parser');
var mongoose = require('mongoose');
// Configuring
var app =  express();
app.listen(3000,function(){
    console.log('Server started');
})
app.use(body_parser.json());
mongoose.connect('mongodb://localhost:27017/ds-db');
// Adding all requirements
var products =  require ('../Node/Schema/products.js');
var carts =  require ('../Node/Schema/carts.js');
var users =  require ('../Node/Schema/users.js');
var wishlists =  require ('../Node/Schema/wishlists.js');
// Proccessing part
app.get('/getproducts',function(req,res){
    products.find({},function(err,data){
        console.log(data);
        res.send(data);
    })
});

app.post('/get',function(req,res){
    
});
app.post('/get',function(req,res){
    
});

'/addproduct'           //post
'/getproduct'           //post
'/removeproduct'        //post
'/updateproduct'        //post
'/getproductsbycat'     //post

'/createcart'           //post
'/addproducttocart'     //post
'/getcartbyuser'        //post
'/clearcart'            //
'/removeproductfromcart'//
'/checkout'             //

'/createwishlist'       //
'/getwishlist'          //              by wishlistid
'/getwishlistsofuser'   //
'/removeproductfromuser'//
'/deletewishlist'       //
'/auth'                 //
'/createuser'           //
'/deleteuser'           //
