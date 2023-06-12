const express = require('express');
const LibraryController = require('../controllers/libreriaController');

const router = express.Router();
const libraryController = new LibraryController();

router.get('/libreria/:id', libraryController.getLibraryWithBooks);
router.get('/todas-librerias', libraryController.getAllLibraries);
router.post('/libreria', libraryController.createLibrary);
router.delete('/libreria/:id', libraryController.deleteLibrary);
router.put('/libreria/:id', libraryController.updateLibrary);

module.exports = router;



//para crear librera
// localhost:3000/library/libreria


/*
Estructura del json

{
  "name": "Tenemos Libros",
  "location": "Calle falsa",
  "telefono": "453252525"
}

*/ 
//