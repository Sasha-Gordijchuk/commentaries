import express from 'express';
import * as userController from '../controllers/userController.js';

export const router = express.Router();

router.get('/', userController.getAll);

router.get('/:userId', userController.getById);

router.post('/', express.json(), userController.create);

router.delete('/:userId', userController.remove);
