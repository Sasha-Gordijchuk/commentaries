/* eslint-disable no-console */
import { Model } from 'sequelize';

export class General extends Model {
  static createTable() {
    try {
      this.sync({ alter: true });
    } catch (error) {
      console.error(error);
    }
  };

  static getAll() {
    return this.findAll();
  };

  static getById(id) {
    const result = this.findByPk(id);

    return result;
  };

  static add(user) {
    this.create(user);
  };

  static remove(id) {
    this.destroy({
      where: {
        id: id,
      },
    });
  };
};
