/* eslint-disable no-console */
import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { CommentUser } from './CommentUser.js';
import { User } from './userModel.js';

export class Comment extends CommentUser {
  static async getHeadComments() {
    const comments = await Comment.findAll({
      include: User,
      where: {
        headCommentId: null,
      },
      order: [
        ['createdAt', 'DESC'],
      ],
    });

    return comments;
  }

  static async getSortedComments(sortType, sortOrder) {
    if (sortType === 'createdAt') {
      const comments = await Comment.findAll({
        include: User,
        where: {
          headCommentId: null,
        },
        order: [
          [sortType, sortOrder],
        ],
      });

      return comments;
    } else {
      const comments = await Comment.findAll({
        include: User,
        where: {
          headCommentId: null,
        },
        order: [
          [Comment.associations.User, sortType, sortOrder],
        ],
      });

      return comments;
    }
  }

  static async getAnswers(id) {
    const comments = await Comment.findAll({
      include: User,
      where: {
        headCommentId: id,
      },
      order: [
        ['createdAt', 'ASC'],
      ],
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
