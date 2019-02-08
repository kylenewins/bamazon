DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
id INT NOT NULL auto_increment,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(5,2) NULL,
stock_quantity INT(100) NULL,
PRIMARY KEY (id)
);

DROP TABLE products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Basketball", "Sports", 10.99, 100),
("Baseball", "Sports", 6.99, 500),
("Gibson Les Paul", "Music", 999.99, 15),
("Bose SoundBar", "Entertainment", 399.99, 65),
("Honey Nut Cheerios", "Food", 12.99, 250),
("Funko Pop Figures", "Toys", 8.99, 50),
("Fender Telecaster", "Music", 699.99, 25),
("LG 3D TV", "Entertainment", 599.99, 40),
("Sock'em Boppers", "Toys", 19.99, 100),
("Crunchwrap Supreme", "Food", 9.99, 999)


