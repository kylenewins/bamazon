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
    // console.log("Connection Established")
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

function purchasePrompt(){
    inquirer.prompt([
        {
            name: "IDquery",
            type: "input",
            message: "Enter the ID of the Product You'd like to Purchase",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like?",
            validate: function(value){
                if(isNaN(value)===false){
                    return true;
                }
                return false;
            }
        }
    ])
    .then(function(answer){
        var query = "SELECT id, price, stock_quantity FROM products WHERE ?";
        connection.query(query, {id: answer.IDquery}, function(err, results){
            var id = results[0].id
            var price = results[0].price
            var qoh = results[0].stock_quantity

            if(parseInt(answer.quantity)>qoh){
                console.log("Insufficient Quantity on Hand")
                purchasePrompt()
            } else{
                var subQuery = "SELECT stock_quantity FROM products WHERE ? -" + answer.quantity
                connection.query(subQuery, {id: id}, function(err, results){
                    console.log(results[0])
                }) 
            }

        })
    })
}

purchasePrompt()