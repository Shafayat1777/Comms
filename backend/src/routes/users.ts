import { Router } from 'express';

import { getAllUsersController, getUser } from '../controllers/userController';

const router = Router();

router.get('/', getAllUsersController);

router.get('/:id', getUser);

export default router;
