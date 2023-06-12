const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'nodeTarea',
  user: 'root',
  password: '123123',
});
/*

exports.getAllUsers = (callback) => {
  const query = 'SELECT * FROM Users';
  conexion.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};*/

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static getAllUsers(callback) {
    const query = 'SELECT * FROM Users';
    conexion.query(query, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        const users = results.map((row) => new User(row.id, row.name, row.email));
        callback(null, users);
      }
    });
  }

  static getOne(criteria, callback) {
    const query = 'SELECT * FROM Users WHERE ? LIMIT 1';
    connection.query(query, criteria, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results[0]);
      }
    });
  }

  static getUserById(id, callback) {
    const query = 'SELECT * FROM Users WHERE id = ?';
    conexion.query(query, [id], (error, results) => {
      if (error) {
        callback(error, null);
      } else if (results.length === 0) {
        callback(new Error('User not found'), null);
      } else {
        const user = new User(results[0].id, results[0].name, results[0].email);
        callback(null, user);
      }
    });
  }
}

module.exports = User;
