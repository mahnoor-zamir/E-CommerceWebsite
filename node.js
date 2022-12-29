const mysql = require('mysql2');
const express = require("express");

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Manemanemane@123',
  database: 'store'
});

const app=express();
connection.connect();



app.post('/customer', function (req, res) {
    const customerid = req.body.customerid;
    const userid = req.body.userid;
    const password = req.body.password;
  
    const query = `INSERT INTO customer (customerid, userid, password) VALUES (?, ?, ?)`;
    const values = [customerid, userid, password];
  
    connection.query(query, values, function (error, results, fields) {
      if (error) {
        console.error(error);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    });
  });

  app.get('/customer', function (req, res) {
    const query = 'SELECT * FROM customer';
    connection.query(query, values, function (error, results, fields) {
        if (error) {
          console.error(error);
          return res.sendStatus(500);
        }
        res.json(results);
      });

});

connection.end();
