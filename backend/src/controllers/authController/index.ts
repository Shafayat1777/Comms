import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { generateToken } from '../../lib/jwtUtils';
import { getUser, insertUser } from '../../models/userModel';
import { registerSchema } from './zod';

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = registerSchema.parse(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = { name, email, password: hashedPassword };

        const result = await insertUser(user);

        res.status(201).json({
            toast: {
                type: 'success',
                status: 201,
                message: 'User registered successfully!',
            },
        });
    } catch (error: any) {
        res.status(200).json({
            toast: {
                type: 'error',
                status: 409,
                message: error.message,
                error: error,
            },
        });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await getUser(email);
        if (!user) throw new Error('User not found');

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) throw new Error('Invalid credentials');

        const token = generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
        req.session.user = token;

        res.status(200).json({
            data: {
                token,
            },
            toast: {
                type: 'success',
                status: 200,
                message: 'User logged in successfully',
            },
        });
    } catch (error: any) {
        res.status(200).json({
            toast: {
                type: 'error',
                status: 401,
                message: error.message,
                error: error,
            },
        });
    }
};

export const loginStatus = (req: Request, res: Response) => {
    if (req.session.user) {
        res.status(200).json(req.session.user);
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
