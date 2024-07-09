import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { join } from "path";
import fs from "fs";
import * as fastcsv from "fast-csv";

export const connect = async () => {
  const db = await open({
    filename: join(__dirname, "products_linkTic.sqlite"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      price TEXT,
      image_url TEXT,
      create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const count = await db.get("SELECT COUNT(*) as count FROM products");
  if (count.count === 0) {
    const csvFilePath = join(__dirname, "products.csv");
    const products: any[] = [];

    fs.createReadStream(csvFilePath)
      .pipe(fastcsv.parse({ headers: true, delimiter: ',', quote: '"' }))
      .on("data", (row) => {
        console.log(row);  
        products.push(row);
      })
      .on("end", async () => {
        const insertStmt = db.prepare(
          "INSERT INTO products (name, price, description, image_url, create_date) VALUES (?, ?, ?, ?, ?)"
        );
        for (const product of products) {
          if (!product.name || !product.description) {
            console.error("No data", product);
            continue;
          }
          (await insertStmt).run(
            product.name,
            product.price,
            product.description,
            product.image_url,
            product.create_date
          );
        }
        (await insertStmt).finalize();
        console.log("Data imported successfully.");
      });
  }

  return db;
};
