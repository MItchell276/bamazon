DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;
USE bamazon_db;

CREATE TABLE products
(
	item_id INT(10) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(1, "boots", "soccer", 79.99, 20);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(2, "jerseys", "basketball", 99.99, 10);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(3, "helmet", "football", 29.99, 5);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(4, "sweater", "hockey", 129.99, 14);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(5, "pants", "football", 39.99, 15);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(6, "shorts", "soccer", 19.99, 19);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(7, "gloves", "baseball", 49.99, 11);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(8, "bats", "baseball", 69.99, 10);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(9, "hats", "fitedhats", 49.99, 11);

INSERT INTO products
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(10, "shoes", "soccer", 12.30, 5);

SElECT *
FROM products


