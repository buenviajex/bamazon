DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (250),
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES	("Batteries", "Electronics", 8.50, 98),
		("Samsung 4K TV", "Electronics", 979.99, 68),
        ("iPhone X", "Cell Phones", 1050, 2000),
        ("Playstation 4 Pro", "Videogames", 299.99, 300),
        ("DSLR", "Cameras", 530.00, 39),
		("MacBook", "Computers", 924.99, 43),
        ("Memento", "Movies", 20.00, 150),
        ("Smartwatch", "Electronics", 230, 88),
        ("Avengers Infinity War Bluray", "Movies", 29.99, 130),
        ("Microsoft Surface", "Computer", 799.99, 49);
