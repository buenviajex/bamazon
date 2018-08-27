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
  connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;

    console.log("\n----------WELCOME TO BAMAZON!!!----------");

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
  connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;
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
      console.log("------------------");
      var query = connection.query("SELECT * FROM products WHERE ?", [{
        item_id: answer
      }] (err,res) )
      var totalStock = res[i].stock_quantity;
      var howMany = answer.units;
      if (totalStock >= howMany) {
        console.log("Looks like we have that item available! \nThanks for your purchase!");
        console.log(totalStock);
      } else {
        console.log("Insufficient Quanitity")
      }
      
    }
  )}
  )}





  //     var answer = "SELECT * FROM products WHERE ?";
  //     connection.query(answer, {
  //       id: answers.
  //     })
  //       // get the information of the chosen item
       
  //       for (var i = 0; i < results.length; i++) {
  //         if (results[i].item_name === answer.choice) {
  //           chosenItem = results[i];
  //         }
  //       }

  //       // determine if bid was high enough
  //       if (chosenItem.highest_bid < parseInt(answer.bid)) {
  //         // bid was high enough, so update db, let the user know, and start over
  //         connection.query(
  //           "UPDATE auctions SET ? WHERE ?",
  //           [
  //             {
  //               highest_bid: answer.bid
  //             },
  //             {
  //               id: chosenItem.id
  //             }
  //           ],
  //           function(error) {
  //             if (error) throw err;
  //             console.log("Bid placed successfully!");
  //             start();
  //           }
  //         );
  //       }
  //       else {
  //         // bid wasn't high enough, so apologize and start over
  //         console.log("Insufficient quantity!");
  //         start();
  //       }
  //     });
  // };

