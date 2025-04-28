import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { getUser, insertUser } from '../../models/userModel';
import { generateToken } from '../../utils/jwtUtils';

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = { name, email, password: hashedPassword };

        const result = await insertUser(user);

        res.status(201).json({
            message: 'User registered successfully',
            type: 'success',
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message, type: 'error' });
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
        console.log(user);
        req.session.user = token;

        res.status(200).json({
            massage: 'User logged in successfully',
            token,
            type: 'success',
        });
    } catch (error: any) {
        res.status(401).json({ error: error.message, type: 'error' });
    }
};

export const loginStatus = (req: Request, res: Response) => {
    if (req.session.user) {
        res.status(200).json(req.session.user);
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
