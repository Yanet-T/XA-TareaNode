/*const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')


exports.getAllUsers = (callback) => {
  userModel.getAllUsers(callback);
};


async function login(name, password){
    const user = await User.findOne({
      where: {
        name: name,
        password: password
      }
    })
    if (!user){
      //Error
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name
      }, 'ClaveSecreta')

      

}*/


const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.getAllUsers = (callback) => {
  userModel.getAllUsers(callback);
};


exports.getUserById = (id, callback) => {
  userModel.getUserById(id, callback);
};
/*
// 
/*
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.getAllUsers = (callback) => {
  userModel.getAllUsers(callback);
};

exports.login = async (name, password) => {
  const user = await userModel.findOne({
    where: {
      name: name,
      password: password
    }
  });

  if (!user) {
    // Error
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name
    },
    'ClaveSecreta'
  );

  return {
    accessToken: token
  };
};
*
module.exports = { login, getAllUsers };


*/

/*const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'nodeTarea',
  user: 'root',
  password: '123123',
});*/