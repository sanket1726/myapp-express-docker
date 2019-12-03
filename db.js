//const express =require('express')
const mysql = require('mysql');

function connect(){
    const connection = mysql.createConnection({
        // put 172.18.6.134 instead of localhost
        
        host: '192.168.43.106',
        user : 'root',
        password : 'root'  ,
        database : 'myapp_db',  
        port : 9811
    })

    connection.connect();
    return connection;
    }
  module.exports={
      connect:connect
  }
