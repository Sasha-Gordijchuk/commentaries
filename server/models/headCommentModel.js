import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { General } from './GeneralModel.js';

export class HeadComment extends General {}

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
