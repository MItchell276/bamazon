const mysql = require("mysql");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    database: "bamazon_db",
    user: "root",
    password: "root"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runSearch();
});


function runSearch() {
    // query the database for all products available for purchase
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // once you have the products, prompt the user for which they'd like to purchase
        inquirer.prompt([
            {
                name: "product",
                type: "list",
                message: "What product would you like to purchase?",
                choices: [
                    "Find product",
                    "Find all products under department name",
                    "Find price of stock",
                    "Search for a specific product",
                ]
            },
        ])
            .then(function (answer) {
                switch (answer.product) {
                    case "Find product":
                        displayProducts();
                        break;

                    case "Find all products under department name":
                        productSearch();
                        break;

                    case "Find price of stock":
                        priceSearch();
                        break;

                    case "Search for a specific product":
                        specificSearch();
                        break;
                }
            });

    });
};

function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        // console.log(res)
        for (var i = 0; i < res.length; i++) {

            console.log("product_name: " + res[i].product_name + " || Stock: " + res[i].stock_quantity);
        }

        // quantitySearch(res[0].stock_quantity, res[0].product_name, res[0].price);
        productSearch()
    });



}

function productSearch() {
    inquirer
        .prompt({
            name: "product",
            type: "input",
            message: "What product would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, { product_name: answer.product }, function (err, res) {
                // for (var i = 0; i < res.length; i++) {

                console.log("product_name: " + res[0].product_name + " || Stock: " + res[0].stock_quantity);
                // }
                quantitySearch(res[0].stock_quantity, res[0].product_name, res[0].price);
            });
        })


}
function quantitySearch(stock_quantity, name, price) {
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "Please enter the amount you would like to buy?",
        })
        .then(function (answer) {
            if (answer.quantity < stock_quantity) {
                var newStock = stock_quantity - answer.quantity
                var query = "UPDATE products SET ? WHERE ?";
                connection.query(query, [{ stock_quantity: newStock }, { product_name: name }], function (err, res) {
                    if (err) throw err;
                    console.log(`
                    --------------------- receipt---------------
                    product name: ${name}
                    quantity: ${answer.quantity}
                    price: ${price}
                    total: $${answer.quantity * price}
                    `)

                })

            } else {
                console.log("Out off Stock")
            }
        })

}








