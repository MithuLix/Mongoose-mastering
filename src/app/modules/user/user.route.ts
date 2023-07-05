import express from 'express';
const router = express.Router();
import { creteUser, getUsers,getUserById } from './user.controller';
import { getUserByIdFromDB, } from './user.serveice';


router.get('/', getUsers );
router.get('/:id', getUserById);
router.post('/create-user', creteUser)

export default router;