import express from 'express';
// eslint-disable-next-line max-len
import * as headCommentController from '../controllers/headCommentController.js';

export const router = express.Router();

router.get('/', headCommentController.getAll);

router.get('/:commentId', headCommentController.getOne);

router.post('/', express.json(), headCommentController.create);

router.delete('/:commentId', headCommentController.remove);
