const express = require('express');
const bodyParser = require('body-parser')
//const mysql =require('mysql')
//import { json } from 'body-parser';
const routerProduct = require('./routes/product')
const app =express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json()) 
app.use('/product',routerProduct)

app.get('/',(request,response)=>{
    response.send('welcome to my backend')
})

app.listen(9898,'0.0.0.0',()=>{
    console.log('server started at port 9898')
})