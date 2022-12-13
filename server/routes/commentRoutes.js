import express from 'express';
import * as commentController from './controllers/commentController.js';

export const router = express.Router();

router.get('/', commentController.getAll);

router.get('/:commentId', commentController.getOne);

router.post('/', express.json(), commentController.create);

router.delete('/:commentId', commentController.remove);
