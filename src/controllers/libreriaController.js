const Library = require('../models/libreriaModel');

class LibraryController {
    getLibrary(req, res) {
      const libraryId = req.params.id;
      const library = new Library();
      
      library.getLibraryById(libraryId, (err, result) => {
        if (err) {
          console.error('Error', err);
          res.status(500).json({ error: 'Error al obtener la librería' });
          return;
        }
  
        if (result.length === 0) {
          res.status(404).json({ error: 'Librería no encontrada' });
          return;
        }
  
        res.json(result[0]);
      });
    }
  
    getLibraryWithBooks(req, res) {
      const libraryId = req.params.id;
      const library = new Library();
      library.getLibraryById(libraryId, (err, result) => {
        if (err) {
          res.status(404).json({ error: 'Error, no se pudo obtener la libreria uqe buscaste' });
          return;
        }
  
        if (result.length === 0) {
          res.status(404).json({ error: 'No se encontro la libreria con el ID ingresado' });
          return;
        }
  
        const libraryData = result[0];
        const libro = result.map((row) => ({
          id: row.id,
          isbn: row.isbn,
          titulo: row.titulo,
          autor: row.autor,
          year: row.year,
        }));
  
        const libraryWithBooks = {
          library: {
            id: libraryData.id,
            name: libraryData.name,
            location: libraryData.location,
            telefono: libraryData.telefono,
          },
          libros: libro,
        };
  
        res.json(libraryWithBooks);
      });
    }

    getAllLibraries(req, res) {
        const library = new Library();
        library.getAllLibraries((err, result) => {
          if (err) {
            console.error('No se pudo obtener la libreria:', err);
            res.status(500).json({ error: 'No se pudo obtener la libreria' });
            return;
          }
    
          res.json(result);
        });
      }





      createLibrary(req, res) {
        const libraryData = req.body; // Obtener los datos de la librería desde el cuerpo de la solicitud
      
        const library = new Library();
        library.createLibrary(libraryData, (err, result) => {
          if (err) {
            console.error('Error al crear la librería:', err);
            res.status(500).json({ error: 'Error al crear la librería' });
            return;
          }
      
          const newLibraryId = result.insertId;
          res.json({ id: newLibraryId, message: 'Librería creada exitosamente' });
        });
      }


      //
      deleteLibrary(req, res) {
        const libraryId = req.params.id;
        const library = new Library();
        
        library.deleteLibrary(libraryId, (err) => {
          if (err) {
            console.error('Error al eliminar la librería:', err);
            res.status(500).json({ error: 'Error al eliminar la librería' });
            return;
          }
        
          res.json({ message: 'Librería eliminada, pero sigue existiendo en la base de datos' });
        });
      }

      
      updateLibrary(req, res) {
        const libraryId = req.params.id;
        const { name, location, telefono } = req.body;
        
        const library = new Library();
        library.updateLibrary(libraryId, name, location, telefono, (err, result) => {
          if (err) {
            console.error('Error al actualizar la librería:', err);
            res.status(500).json({ error: 'Error al actualizar la librería' });
            return;
          }
      
          res.json({ message: 'Librería actualizada correctamente' });
        });
      }
      
    }
    
    

  
  module.exports = LibraryController;
  
  
