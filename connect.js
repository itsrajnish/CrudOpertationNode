const mysql = require('mysql');


var myconnection = mysql.createConnection({
    host: 'localhost',
    database: 'arivani',
    port: 3306,
    user: 'root',
    password: ''
});

myconnection.connect(function (err) {
    if (err) {
        console.log("something error");
    }
    else {
        console.log("Connect Successfully");
    }
});

module.exports = myconnection;


