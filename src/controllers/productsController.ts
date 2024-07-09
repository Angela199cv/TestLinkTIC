import { Request, Response } from "express";
import { connect } from "../database";
import { Product } from "../interfaces/ProductsInterface";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const db = await connect();
    const products = await db.all("SELECT * FROM products");
    return res.status(200).json(products);
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
    const db = await connect();
    const product = await db.get("SELECT * FROM products WHERE id = ?", [id]);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    } else {
      return res.status(200).json(product);
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
    const db = await connect();
    const product = await db.get("SELECT * FROM products WHERE name = ?", [name]);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    } else {
      return res.status(200).json(product);
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
    const newProduct: Product = req.body;
    const db = await connect();
    const result = await db.run("INSERT INTO products (name, price, description) VALUES (?, ?, ?)", [newProduct.name, newProduct.price, newProduct.description]);
    return res.status(201).json({
      id: result.lastID,
      ...newProduct,
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
    const db = await connect();
    const result = await db.run("DELETE FROM products WHERE id = ?", [id]);
    if (result.changes === 0) {
      return res.status(404).json({ message: 'Product not found' });
    } else {
      return res.status(200).json({ message:` Success deleted ${id} `});
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
    const name = req.params.productName;
    const db = await connect();
    const result = await db.run("DELETE FROM products WHERE name = ?", [name]);
    if (result.changes === 0) {
      return res.status(404).json({ message: 'Product not found' });
    } else {
      return res.status(200).json({ message:`Success deleted ${name}`  });
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
    const updatedProduct: Product = req.body;
    const db = await connect();
    const result = await db.run("UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?", [updatedProduct.name, updatedProduct.price, updatedProduct.description, id]);
    if (result.changes === 0) {
      return res.status(404).json({ message: 'Product not found' });
    } else {
      return res.status(200).json({ message:`Success updated ${id}` });
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
    const name = req.params.productName;
    const updatedProduct: Product = req.body;
    const db = await connect();
    const result = await db.run("UPDATE products SET name = ?, price = ?, description = ? WHERE name = ?", [updatedProduct.name, updatedProduct.price, updatedProduct.description, name]);
    if (result.changes === 0) {
      return res.status(404).json({ message: 'Product not found' });
    } else {
      return res.status(200).json({ message:` Success updated ${name}` });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};