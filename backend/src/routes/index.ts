import { Router } from "express";
import usersRouter from "./users";
import authRouter from "./auth";
import chatRouter from "./chat";
import { authMiddleware } from "@/middleware/authMiddleware";

const router = Router();

router.use('/users',usersRouter);
router.use('/auth',authRouter);
router.use('/chat',chatRouter);

export default router;
