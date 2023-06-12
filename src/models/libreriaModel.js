const mysql = require('mysql');


const conexion = mysql.createConnection({
host:'localhost',
database:'nodeTarea',
user:'root',
password:'123123',
});






// Obtener libreria por ID
class Library {
  getLibraryById(libraryId, callback) 
  {
    const query = ` SELECT l.*, b.* FROM libreria AS l
      LEFT JOIN libro AS b ON l.id = b.library_id WHERE l.id = ? `;
    conexion.query(query, [libraryId], callback);
  }




// Todas las librerias

  getAllLibraries(callback) 
  {
    const query = 
    ` SELECT * FROM libreria `;

    conexion.query(query, callback);
  }



// Crea librerias

createLibrary(libraryData, callback) {
  const query = 'INSERT INTO libreria SET ?';
  conexion.query(query, libraryData, callback);
}


// para borrar

deleteLibrary(libraryId, callback) {
  const query = 'UPDATE libreria SET deleted = 1 WHERE id = ?';
  conexion.query(query, [libraryId], callback);
}

//Para editar

  updateLibrary(libraryId, name, location, telefono, callback) {
  const query = 'UPDATE libreria SET name = ?, location = ?, telefono = ? WHERE id = ?';
  conexion.query(query, [name, location, telefono, libraryId], callback);
}


  
}

module.exports = Library;