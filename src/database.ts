import { createPool } from "mysql2/promise";

export const connect = async () => {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "dbroot2024",
    database: "products_linkTic",
    port:3300,
    connectionLimit: 10,
  });
  return connection;
};
