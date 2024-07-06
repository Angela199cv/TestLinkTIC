CREATE DATABASE products_linkTic;

CREATE TABLE products(
    id  INT(12) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    price NUMBER,
    image_url TEXT,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

DESCRIBE products;