CREATE DATABASE products_linkTic;

CREATE TABLE products(
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price TEXT,
    image_url TEXT,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

DESCRIBE products;