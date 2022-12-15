/* eslint-disable no-console */
import { User } from '../models/userModel.js';

export const getAll = async(req, res) => {
  const result = await User.getAll();

  res.send(result);
};

export const getOne = async(req, res) => {
  let { findBy } = req.query;
  const { userParam } = req.params;

  if (!findBy) {
    findBy = 'id';
  }

  const findedUser = await User.findOne({
    where: {
      [findBy]: userParam,
    },
  });

  if (!findedUser) {
    res.sendStatus(404);

    return;
  }

  res.send(findedUser);
};

export const create = (req, res) => {
  const { name, email, homepage } = req.body;

  if (!name || !email) {
    res.sendStatus(422);

    return;
  }

  const newUser = {
    name,
    email,
    homepage,
  };

  User.add(newUser);

  res.statusCode = 201;
  res.send(newUser);
};

export const remove = async(req, res) => {
  const { userId } = req.params;
  const findedUser = await User.findByPk(userId);

  if (!findedUser) {
    res.sendStatus(404);

    return;
  }

  await User.remove(userId);

  res.sendStatus(204);
};
