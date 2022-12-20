/* eslint-disable no-console */
import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { CommentUser } from './CommentUser.js';

export class User extends CommentUser {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  homepage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  createdAt: false,
  updatedAt: false,
});
