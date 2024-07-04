import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interfaces/ProductsInterface";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const connection = await connect();
    const products = await connection.query("SELECT * FROM products");
    await connection.end();
    if (products[0].length === 0) {
      return res.status(404).json({ message: `Products not found` });
    } else {
      return res.status(200).json(products[0]);
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.productId;
    const connection = await connect();
    connection.query("SELECT * FROM products WHERE id= ?", [id]);
    if (!id) {
      return res.status(404).json({ message: `Products not found` });
    } else {
      return res.status(200).json();
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const getProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const name = req.params.productName;
    const connection = await connect();
    connection.query("SELECT * FROM products WHERE name= ?", [name]);
    if (!name) {
      return res.status(404).json({ message: `Products not found` });
    } else {
      return res.status(200).json();
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newPost: Post = req.body;
    const connection = await connect();
    connection.query("INSERT INTO products SET ?", [newPost]);
    return res.status(200).json({
      message: "Product Created",
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.productId;
    const connection = await connect();
    await connection.query("DELETE FROM products WHERE id= ?", [id]);
    if (!id) {
      return res.status(404).json({ message: `Products not found` });
    } else {
      return res.status(200).json({
        message: `Success deleted ${id}`,
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const deleteProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const name = req.params.producName;
    const connection = await connect();
    await connection.query("DELETE FROM products WHERE name= ?", [name]);
    if (!name) {
      return res.status(404).json({ message: `Products not found` });
    } else {
      return res.status(200).json({
        message: `Success deleted ${name}`,
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const updateProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.productId;
    const updateProductById: Post = req.body;
    const connection = await connect();
    await connection.query("UPDATE products set ? WHERE id= ?", [
      updateProductById,
      id,
    ]);
    if (!id) {
      return res.status(404).json({ message: `Products not found` });
    } else {
      return res.status(200).json({
        message: `Success updated ${id}`,
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const updateProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const name = req.params.producName;
    const updateProductByName: Post = req.body;
    const connection = await connect();
    await connection.query("UPDATE products set ? WHERE name= ?", [
      updateProductByName,
      name,
    ]);
    if (!name) {
      return res.status(404).json({ message: `Products not found` });
    } else {
      return res.status(200).json({
        message: `Success updated ${name}`,
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
