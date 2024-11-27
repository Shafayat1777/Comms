import { Request, Response } from "express";

export const loginUser = (req: Request, res: Response) => {
  const { email, name } = req.body;
  req.session.user = { name, email };
  //res.cookie("name", "John Doe", { maxAge: 1000 * 60 * 60, httpOnly: true });

  res.status(200).send({ message: "Login successful" });
};

export const loginStatus = (req: Request, res: Response) => {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
