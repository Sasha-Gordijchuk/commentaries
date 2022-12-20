/* eslint-disable no-console */
import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { CommentUser } from './CommentUser.js';
import { User } from './userModel.js';

export class Comment extends CommentUser {
  static async getAll(id = null) {
    const comments = await Comment.findAll({
      include: User,
      where: {
        headCommentId: id,
      },
    });

    return comments;
  }

  static removeAllByHeadComment(id) {
    Comment.destroy({
      where: {
        headCommentId: id,
      },
    });
  }
}

Comment.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  headCommentId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
}, {
  sequelize,
  updatedAt: false,
});
