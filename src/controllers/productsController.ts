import { Request, Response } from "express";
import { connect } from "../database";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const connection = await connect();
  const products = await connection.query("SELECT * FROM products");
  return res.json(products[0]);
};
