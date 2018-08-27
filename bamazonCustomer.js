var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  products();
});


// function to handle posting new items up for auction

  // prompt for info about the item being put up for auction

function products() {
  console.log("\n----------WELCOME TO BAMAZON!!!----------");
 
  connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
      console.log(
        "Item ID: " + res[i].item_id +
        "\nProduct Name: " + res[i].product_name +
        "\nDepartment Name: " + res[i].department_name +
        "\nPrice: " + res[i].price +
        "\nStock Quantity: " + res[i].stock_quantity +
        "\n------------------------------------------"
      );
    }
    start();
  });
}

function start() {
  inquirer
    .prompt([
      {
        name: "selectId",
        type: "input",
        message: "What is the ID of the product you would like to purchase?"
      },
      {
        name: "units",
        type: "input",
        message: "How many units of this product would you like to purchase?"
      },
    ]).then(function(answer) {
      var item = answer.selectID;
      var units = answer.units;
      console.log("Let me check that for you!");

      checkStock(item, units);
    })
  }

  function checkStock (item, units) {
    connection.query('SELECT * FROM products WHERE item_id = ?', item, function (err, res) {
      if (err) throw err;
      var res = res[0];
      if(units > res.stock_quantity) {
        console.log("That item is currently unavailable.")
      } else {
        console.log("Great choice! Your total comes out to: $" + (res.price * units));
        updateStock(id, res.stock_quantity, units);
      }
    }
  )};
  
  function updateStock(item, stock, units) {
    var updateStock = stock - units;
    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [updateStock, item], function(err) {
      if(err) throw err;
    })

  }