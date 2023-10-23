const express = require('express');
const app = express();
const fs = require('fs');

const api = require('./src/routes/api');
// const con = require('./src/models/DB');

// app.use(api);
app.use("/api",api)

  // const tableName = 'customer';
  //   var sql = "CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))";

  //   con.query(`SHOW TABLES LIKE '${tableName}'`, function (err, result) {
  //     if (err) throw err;
      
  //     if (result.length === 0) {
  //       con.query(sql, function (err, result) {
  //         if (err) throw err;
  //         console.log("Table created");
  //       });
  //     }else {
  //       console.log("Table already exists, skipping creation.");
  //     }
  //   })




app.get('/', (req, res) => {
    res.send('you have logged in')
})

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
