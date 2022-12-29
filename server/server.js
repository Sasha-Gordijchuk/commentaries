/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { User } from './models/userModel.js';
import { Comment } from './models/commentModel.js';
import { router as userRouter } from './routes/userRoutes.js';
import { router as commentRouter } from './routes/commentRoutes.js';

export function createServer() {
  const app = express();

  User.hasMany(Comment);
  Comment.belongsTo(User);

  User.createTable();
  Comment.createTable();

  app.use(cors());

  app.use(fileUpload());
  app.use('/users', userRouter);
  app.use('/comments', commentRouter);
  app.use(express.static('./'));

  return app;
};
