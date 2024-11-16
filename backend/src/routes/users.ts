import { Router, Request, Response } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  res.send({
    message: "users",
  });
});

router.get("/users/:id", (req: Request, res: Response) => {
  req.params.id;
  res.send({
    message: "users",
    id: req.params.id,
    query: req.query,
  });
});

export default router;
