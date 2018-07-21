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
app.get('/',function(req,res){ //DD
    res.send("Hi, you are in home");
});
app.get('/getproducts',function(req,res){ //DD
    products.find({},function(err,data){
        if(err){
            res.status(500).send({error:"internal error occured. please try again."});
        }else{
            res.status(200).send(data);
        }
    })
});

app.post('/addproduct',function(req,res){//add product to product list. //DD
    var prod = new products();
    var data =  req.body;
    if(Object.keys(data).length == 0 ){
        res.status(500).send({error:"internal error occured. please try again."});
    }else{
        prod.title = data.title;
        prod.data = data.price;
        prod.description = data.description;
        prod.save(function(err,result){
            if(err){
                res.status(500).send({error:"internal error occured. please try again."});
            }else{
                res.status(200).send(result);
            }
        })

    }
});
// ID 5b532b9c808fea69b5baee58
app.post('/getproduct',function(req,res){ //DD
    console.log();
    var pid = req.body._id;
    console.log(pid);
    if(Object.keys(req.body).length == 0 ){
        res.status(500).send({error:"internal error occured. please try again."});
    }else
    products.find({_id:pid},function(err,result){
        if(err){
            res.status(500).send({error:"internal error occured. please try again."});
        }else{
            res.status(200).send(result);
        }
    })
    
});

app.post('/removeproduct',function(req,res){ //DD
    var pid = req.body._id;
    if(Object.keys(req.body).length == 0 ){
        res.status(500).send({error:"internal error occured. please try again."});
    }else
    products.remove({_id:pid},function(err,result){
        if(err){
            res.status(500).send({error:"internal error occured. please try again."});
        }else{
            res.status(200).send(result);
        }
    })
});

app.post('/updateproduct',function(req,res){ //DD
    var data= req.body;
    var pid = data._id;
    if(Object.keys(req.body).length == 0 ){
        res.status(500).send({error:"internal error occured. please try again."});
    }else
    products.updateOne({_id:pid},{title:data.title,price:data.price,description:data.description,cat:data.cat,imgSrc:data.imgSrc,},function(err,result){
        if(err){
            res.status(500).send({error:"internal error occured. please try again."});
        }else{
            res.status(200).send(data);
        }
    })
});

app.post('/getproductsbycat',function(req,res){ //DD
    var cato= req.body.cat;
    if(Object.keys(req.body).length == 0 ){
        res.status(500).send({error:"internal error occured. please try again."});
    }else
    products.find({cat:cato},function(err,result){
        if(err){
            res.status(500).send({error:"internal error occured. please try again."});
        }else{
            res.status(200).send(result);
        }
    })
});

app.post('/createcart',function(req,res){
    var cart = new carts();
    
    
});

app.post('/addproducttocart',function(req,res){
    
});

app.post('/getcartbyuser',function(req,res){
    
});

app.post('/clearcart',function(req,res){
    
});

app.post('/removeproductfromcart',function(req,res){
    
});

app.post('checkout',function(req,res){
    
});

app.post('/createwishlist',function(req,res){
    
});

app.post('/getwishlist',function(req,res){
    
});

app.post('/getwishlistsofuser',function(req,res){
    
});

app.post('/removeproductfromuser',function(req,res){
    
});

app.post('/deletewishlist',function(req,res){
    
});

app.post('/auth',function(req,res){
    
});

app.post('/createuser',function(req,res){
    var body = req.body;
    var user = new user();
    if(Object.keys(req.body).length == 0 ){
        res.status(500).send({error:"internal error occured. please try again."});
    }else{
        user.name=body.name;
    }
    
});

app.post('/deleteuser',function(req,res){
    
});



/*

if(err){
            res.status(500).send({error:"internal error occured. please try again."});
        }else{
            res.status(200).send(data);
        }

*/