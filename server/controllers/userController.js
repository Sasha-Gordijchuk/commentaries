/* eslint-disable no-console */
import { User } from '../models/userModel.js';

export const getAllUsers = async() => {
  const result = await User.findAll();

  console.log(result);

  return result;
};
