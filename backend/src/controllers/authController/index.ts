import { Request, Response } from "express";
import { registerUser, loginUser } from "./service";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const result = await registerUser(name, email, password);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const {  email, password } = req.body;
  try {
    const result = await loginUser( email, password);

    req.session.user = result.token;

    res.status(200).json({ massage: "User logged in successfully", result });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};

export const loginStatus = (req: Request, res: Response) => {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
