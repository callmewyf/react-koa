const { DataTypes } = require('sequelize');
const TodolistDb = require('./../config/db');
const userModel = './../schema/user';

const User = require(userModel)(TodolistDb, DataTypes);

const getUserById = async (id) => {
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  })

  return userInfo
}

const getUserByName = async (name) => {
  const userInfo = await User.findOne({
    where: {
      user_name: name
    }
  })

  return userInfo;
}

module.exports = {
  getUserById,
  getUserByName,
}