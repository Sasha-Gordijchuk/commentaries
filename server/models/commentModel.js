import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db.js';

export class Comment extends Model {
  static async createTable() {
    try {
      await Comment.sync({ alter: true });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  static async getAll() {
    const result = await Comment.findAll();

    return result;
  };

  static async getAllByHeadComment(id) {
    const result = await Comment.findAll({
      where: {
        headCommentId: id,
      },
    });

    return result;
  };

  static async getById(id) {
    const result = await Comment.findByPk(id);

    return result;
  };

  static async add(comment) {
    await Comment.create(comment);
  };

  static async remove(commentId) {
    await Comment.destroy({
      where: {
        id: commentId,
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
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  headCommentId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
});
