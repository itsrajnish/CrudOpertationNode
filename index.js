const myconnection = require('./connect');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });

app.get("/employee", (req, res) => {
    myconnection.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

app.post("/employee", (req, res) => {
    console.log(req.body, "req.body");
    var EmployeeName = req.body.EmployeeName;
    var Position = req.body.Position;
    var Salary = req.body.Salary;
    var Joining = req.body.Joining;
    var Point = req.body.Point;
    var City = req.body.City;
    var PinCode = req.body.PinCode;

    var sql = "INSERT INTO `employee`(`EmployeeName`, `Position`, `Salary`, `Joining`, `Point`, `city`, `PinCode`) VALUES ('" + EmployeeName + "' , '" + Position + "' , '" + Salary + "' , '" + Joining + "' , '" + Point + "' , '" + City + "' , '" + PinCode + "')"

    myconnection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

app.delete("/employee", (req , res) => {
    myconnection.query('DELETE FROM employee WHERE id=1' , (err , result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.put("/employee", (req, res) => {
    myconnection.query('UPDATE employee SET EmployeeName="Nitin Sharma" WHERE id=2' , (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        } 
    })

});

app.listen(9090, () => {
    console.log("Running now");
})

