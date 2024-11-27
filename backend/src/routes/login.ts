import { Router } from "express";
import { loginUser, loginStatus } from "../controllers/loginController";

const router = Router();

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Login to your account
 *     description: sign in and get authenticated
 *     tags:
 *       - login, signin
 *     responses:
 *       200:
 *         description: login
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user's ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The user's name.
 *                     example: John Doe
 */
router.post("/", loginUser);
router.get("/status", loginStatus);



export default router;
