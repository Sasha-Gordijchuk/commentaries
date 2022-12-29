import express from 'express';
import * as commentController from '../controllers/commentController.js';

export const router = express.Router();

router.get('/', commentController.getAll);

router.get('/byHead/:headCommentId', commentController.getAll);

router.get('/:commentId', commentController.getOne);

router.post('/', commentController.create);

router.delete('/:commentId', commentController.remove);

router.patch('/:headCommentId', commentController.removeAllByHeadComment);
