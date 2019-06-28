const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ng_games_db'
});

connection.connect();

connection.query('SELECT * FROM games',
function(err, rows, fields) {
    if(!err)
        console.log('The sol is:', rows);
    else
        console.log('Error', err);
});

app.use('/', (req, res) => {
    res.status(200).send('La API funciona correctamente');
  });
  
  app.listen(3000);