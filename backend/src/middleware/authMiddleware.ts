import { NextFunction, Request, Response } from 'express';

import { verifyToken } from '@/lib/jwtUtils';

// adjust path if needed

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    try {
        const authHeader = req.headers.authorization;

        // Check if the authorization header is present and starts with 'Bearer'
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({
                message: 'Unauthorized: No token provided',
                toast: {
                    type: 'error',
                    status: 401,
                    message: 'Unauthorized: No token provided',
                    error: {},
                },
            });
            return; // Exit here to prevent further execution
        }

        // Extract the token from the Authorization header
        const token = authHeader.split(' ')[1];

        // Verify the token
        const decoded = verifyToken(token);

        if (!decoded) {
            res.status(401).json({
                message: 'Unauthorized: Invalid token',
                toast: {
                    type: 'error',
                    status: 401,
                    message: 'Unauthorized: Invalid token',
                    error: {},
                },
            });
            return; // Exit here to prevent further execution
        }

        // Attach the decoded data to the request object for later use
        (req as any).user = decoded;

        next(); // Token is valid, continue to next handler
    } catch (error) {
        console.error('Auth Middleware Error:', error);
        res.status(500).json({
            message: 'Internal server error',
            toast: {
                type: 'error',
                status: 500,
                message: 'Internal server error',
                error: {},
            },
        }); // Send a response without returning
    }
};
