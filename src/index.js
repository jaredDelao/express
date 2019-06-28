const express = require('express');
const app = express();
const mysql = require('mysql');
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ng_games_db'
});

// pool.getConnection(function(err) {
//     if (!err) {
//         console.log('DB is connected');
//     }
// });

app.get("/", function(req, res){
  var array = pool.query('SELECT * FROM games', function(err, rows) {
      if(err) throw err;
      console.log(rows);
      res.json(rows);
  });
  
    
})


// app.use('/', (req, res) => {
//     res.status(200).send('La API funciona correctamente');
//   });
  
  app.listen(3000);