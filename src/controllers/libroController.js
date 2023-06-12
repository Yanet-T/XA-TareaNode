/*const librosService = require('../services/libroService')
  
async function getAllLibros(req, res){
    const Libros = await librosService.getAllLibros()


            res.status(200).send(libro)
        }



    module.exports = { getAllLibros }*/

const Book = require('../models/librosModel');

exports.getAllBooks = (req, res) => {
  Book.getAll((err, books) => {
    if (err) {
      console.error('Error al obtener los libros:', err);
    } else {
      res.json(books);
    }
  });
};

//Para obtener segur ID
exports.getBookById = (req, res) => {
    const bookId = req.params.id;
    
    Book.getById(bookId, (err, book) => {
      if (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'ERROR Al obtener el libro:' });
      } else if (!book) {
        res.status(404).json({ error: 'No encontrado' });
      } else {
        res.json(book);
      }
    });
  };

  exports.createBook = (req, res) => {
    const { isbn, titulo, autor, year, library_id } = req.body;
  
    const newBook = new Book(null, isbn, titulo, autor, year, library_id);
  
    Book.create(newBook, (err, book) => {
      if (err) {
        console.error('Error al crear el libro:', err);
        res.status(500).json({ error: 'Error al crear el libro' });
      } else {
        res.status(201).json(book);
      }
    });
  };


  exports.updateBook = (req, res) => {
    const bookId = req.params.id;
    const { isbn, titulo, autor, year, library_id } = req.body;
  
    const updatedBook = new Book(bookId, isbn, titulo, autor, year, library_id);
  
    Book.update(updatedBook, (err, book) => {
      if (err) {
        console.error('Error al modificar el libro:', err);
        res.status(500).json({ error: 'Error al modificar el libro' });
      } else if (!book) {
        res.status(404).json({ error: 'No se encontró el libro' });
      } else {
        res.json(book);
      }
    });
  };

  