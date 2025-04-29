import { Request, Response } from 'express';

import { getUserById, getUsers } from './service';

// GET ALL USERS
export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).json({ type: 'success', data: users });
    } catch (error: unknown) {
        res.status(500).json({
            message: 'Server error',
            type: 'error',
            error: error,
        });
    }
};

// GET USER BY ID
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = req.query;

    try {
        const user = await getUserById(id, query);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error: unknown) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};
