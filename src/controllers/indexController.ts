import { Request, Response } from "express";

export const initialRelease = (req: Request, res: Response): Response => {
  return res.json("Welcome to my API");
};

