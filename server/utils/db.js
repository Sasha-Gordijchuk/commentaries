/* eslint-disable no-console */
import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize(
//   's4z_data',
//   'xruwa2jbccbxuf2vqx2k',
//   'pscale_pw_o6yecMRURbhvOTXaxBPR8RQXGtJqs1Uh6BfUlaCsRtH',
//   {
//     host: 'eu-central.connect.psdb.cloud',
//     dialect: 'mysql',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   },
// );

export const sequelize = new Sequelize(
  'postgres',
  'postgres',
  '1234',
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);
