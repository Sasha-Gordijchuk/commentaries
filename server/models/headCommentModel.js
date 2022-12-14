import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db.js';

export class HeadComment extends Model {
  static async createTable() {
    try {
      await HeadComment.sync({ alter: true });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  static async getAll() {
    const result = await HeadComment.findAll();

    return result;
  };

  static async getById(id) {
    const result = await HeadComment.findByPk(id);

    return result;
  };

  static async add(comment) {
    await HeadComment.create(comment);
  };

  static async remove(commentId) {
    await HeadComment.destroy({
      where: {
        id: commentId,
      },
    });
  }
}

HeadComment.init({
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
