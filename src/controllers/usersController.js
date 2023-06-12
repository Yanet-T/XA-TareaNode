const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = (req, res) => {
  userService.getAllUsers((error, users) => {
    if (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    } else {
      res.json(users);
    }
  });
};




exports.getUserById = (req, res) => {
  const userId = req.params.id;
  userService.getUserById(userId, (error, user) => {
    if (error) {
      console.error('Error al obtener el usuario:', error);
      if (error.message === 'User not found') {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(500).json({ error: 'Error al obtener el usuario' });
      }
    } else {
      res.json(user);
    }
  });
};



