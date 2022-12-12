/* eslint-disable no-console */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db.js';

export class User extends Model {
  static async createTable() {
    try {
      await User.sync();
    } catch (error) {
      console.error(error);
    }
  };

  static async getAll() {
    const result = await User.findAll();

    return result;
  };

  async getById(id) {
    const result = await User.findByPk(id);

    return result;
  };

  async create(user) {
    await User.create(user);
  };

  async remove(userId) {
    console.log(`ID ====== ${userId}`);

    await User.destroy({
      where: {
        id: userId,
      },
    });
  }
}

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
});
