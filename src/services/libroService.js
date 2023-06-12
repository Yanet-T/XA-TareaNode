const Libros = require('../models/librosModel');

async function getAllLibros() {
  const listLibros = await Libros.findAll();
  return listLibros;
}

module.exports = { getAllLibros };