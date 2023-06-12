//const { Model, DataTypes } = require('sequelize');
//const { dbInstances } = require('../db/sequelize')
//*const { Model, DataTypes } = require('sequelize');
/* const sequelize = require('../db/sequelize');

class Libros extends Model {}

Libros.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false
    },
    library_id: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Libros',
    createdAt: false,
    updatedAt: false
  }
);

module.exports = Libros;
*/

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'nodeTarea',
  user: 'root',
  password: '123123',
});



class Book {
  constructor(id, isbn, titulo, autor, year, library_id) {
    this.id = id;
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.year = year;
    this.library_id = library_id;
  }

  static getAll(callback) {
    const query = 'SELECT * FROM libro';
    connection.query(query, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const books = results.map(
          (row) =>
            new Book(row.id, row.isbn, row.titulo, row.autor, row.year, row.library_id)
        );
        callback(null, books);
      }
    });
  }
//Obtenes segun ID
  static getById(bookId, callback) {
    const query = 'SELECT * FROM libro WHERE id = ?';
    connection.query(query, [bookId], (err, results) => {
      if (err) {
        callback(err, null);
      } else if (results.length === 0) {
        callback(null, null);
      } else {
        const book = new Book(
          results[0].id,
          results[0].isbn,
          results[0].titulo,
          results[0].year,
          results[0].library_id,

        );
        callback(null, book);
      }
    });
  }

  static create(book, callback) {
    const query = 'INSERT INTO libro (isbn, titulo, autor, year, library_id) VALUES (?, ?, ?, ?, ?)';
    const values = [book.isbn, book.titulo, book.autor, book.year, book.library_id];
  
    connection.query(query, values, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        book.id = result.insertId;
        callback(null, book);
      }
    });
  }






  static update(book, callback) {
    const query = 'UPDATE libro SET isbn = ?, titulo = ?, autor = ?, year = ?, library_id = ? WHERE id = ?';
    const values = [book.isbn, book.titulo, book.autor, book.year, book.library_id, book.id];
  
    connection.query(query, values, (err, result) => {
      if (err) {
        callback(err, null);
      } else if (result.affectedRows === 0) {
        callback(null, null);
      } else {
        callback(null, book);
      }
    });
  }





}



module.exports = Book;


