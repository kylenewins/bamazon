var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw(err)
    console.log("Connection Established")
    start()
});

function start(){
    var query = "SELECT * FROM products";
    var divider = "\n-----------------"
      connection.query(query, function(err, results) {
        for (var i = 0; i < results.length; i++) {
          console.log("ID: " + results[i].id + divider +
          " || Product Name: " + results[i].product_name + divider +
          " || Department Name: " + results[i].department_name + divider +
          " || Price: $" + results[i].price + divider +
          " || Quantity On Hand: " + results[i].stock_quantity) + divider;
        }
    })
}