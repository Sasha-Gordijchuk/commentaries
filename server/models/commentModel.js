/* eslint-disable no-console */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db.js';

export class Comment extends Model {
  static async createTable() {
    try {
      await Comment.sync();
    } catch (error) {
      console.error(error);
    }
  };

  static async getAll() {
    const result = await Comment.findAll();

    return result;
  };

  async getById(id) {
    const result = await Comment.findByPk(id);

    return result;
  };

  async create(comment) {
    await Comment.create(comment);
  };

  async remove(commentId) {
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
}, {
  sequelize,
});
