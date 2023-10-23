// const mysql = require('mysql');

// module.exports  = class UserController{
//     static db(req,res){
    
//         const con = mysql.createConnection({
//             host: "localhost",
//             user: "root",
//             password: "",
//             database: "mydb"
//         });
          
          
//     }

// }
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

module.exports = con;

