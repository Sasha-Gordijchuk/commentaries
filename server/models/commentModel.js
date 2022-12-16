import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { General } from './GeneralModel.js';

export class Comment extends General {
  static async getAllByHeadComment(id) {
    const result = await Comment.findAll({
      where: {
        headCommentId: id,
      },
    });

    return result;
  };
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
