import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interfaces/ProductsInterface";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const connection = await connect();
  const products = await connection.query("SELECT * FROM products");
  return res.json(products[0]);
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.productId;
  const connection = await connect();
  connection.query("SELECT * FROM products WHERE id= ?", [id]);
  return res.json();
};

export const getProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const name = req.params.productName;
  const connection = await connect();
  connection.query("SELECT * FROM products WHERE name= ?", [name]);
  return res.json();
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newPost: Post = req.body;
  const connection = await connect();
  connection.query("INSERT INTO products SET ?", [newPost]);
  return res.json({
    message: "Product Created",
  });
};

export const deleteProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.productId;
  const connection = await connect();
  await connection.query("DELETE FROM products WHERE id= ?", [id]);
  return res.json({
    message: `Success deleted ${id}`,
  });
};

export const deleteProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const name = req.params.producName;
  const connection = await connect();
  await connection.query("DELETE FROM products WHERE name= ?", [name]);
  return res.json({
    message: `Success deleted ${name}`,
  });
};

export const updateProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.productId;
  const updateProductById: Post = req.body;
  const connection = await connect();
  await connection.query("UPDATE products set ? WHERE id= ?", [
    updateProductById,
    id,
  ]);
  return res.json({
    message: `Success updated ${id}`,
  });
};

export const updateProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const name = req.params.producName;
  const updateProductByName: Post = req.body;
  const connection = await connect();
  await connection.query("UPDATE products set ? WHERE name= ?", [
    updateProductByName,
    name,
  ]);
  return res.json({
    message: `Success updated ${name}`,
  });
};
