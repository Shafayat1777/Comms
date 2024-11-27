import { Router } from "express";
import usersRouter from "./users";
import loginRouter from "./login";

const router = Router();

router.use('/users',usersRouter);
router.use('/login',loginRouter);

export default router;
