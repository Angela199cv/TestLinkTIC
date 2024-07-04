import { createPool } from "mysql2/promise";

export const connect = async () => {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "products_linkTic",
    connectionLimit: 10,
  });
  return connection;
};
