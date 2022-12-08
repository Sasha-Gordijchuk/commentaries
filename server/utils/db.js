/* eslint-disable no-console */
import { Sequelize, DataTypes } from 'sequelize';

// eslint-disable-next-line max-len
const sequelize = new Sequelize('s4z_data', 'xruwa2jbccbxuf2vqx2k', 'pscale_pw_o6yecMRURbhvOTXaxBPR8RQXGtJqs1Uh6BfUlaCsRtH', {
  host: 'eu-central.connect.psdb.cloud',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
