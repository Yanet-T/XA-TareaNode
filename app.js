

    /*
    
    
    
    
    
    
    
    */

    // Esto es la aplicacion de express
/** 
const express = require('express');
const userRouter = require('./src/routes/user-routes');

const app = express();
const port = 5000;

app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => {
  console.log("Aplicación web funcionando y corriendo en el puerto", port);
})/*/
/*

const express = require('express');
const userRouter = require('./src/routes/user-routes');

const app = express();
//const port = 5000;

app.use(express.json());

app.use('/users', userRouter);

//app.listen(port, () => {
 // console.log("Aplicación web funcionando y corriendo en el puerto", port);

/*/
const mysql = require('mysql');

const conexion = mysql.createConnection({
host:'localhost',
database:'nodeTarea',
user:'root',
password:'123123',
});
/*

conexion.connect(function(error){
  if(error){
    throw error;
  } else {
    console.log('Conexion Exitosa')
  }

});*/
/*
conexion.query('SELECT * FROM users', function(error, results, fields){
  if(error)
  throw error;

  results.forEach(results => {
    console.log(results);
  });

})

conexion.end*/



// Conecta a la base de datos



/*ESto sirve para ver que tablas hay en la base da sirven para mysql y ver*/

/*

conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }

  console.log('Conexión exitosa a la base de datos');

  // Obtiene la lista de tablas en la base de datos
  conexion.query('SHOW TABLES', (error, results) => {
    if (error) {
      console.error('Error al obtener las tablas:', error);
      return;
    }

    // Recorre los resultados y muestra el nombre de cada tabla
    console.log('Tablas existentes:');
    results.forEach((row) => {
      console.log(row[`Tables_in_${conexion.config.database}`]);
    });

    // Realiza la consulta SELECT para obtener todos los registros de la tabla "Users"
    conexion.query('SELECT * FROM Users', (error, results) => {
      if (error) {
        console.error('Error al obtener los registros de la tabla "Users":', error);
        return;
      }

      // Muestra los registros en la consola
      console.log('Registros de la tabla "Users":');
      results.forEach((row) => {
        console.log(row);
      });

      // Cierra la conexión a la base de datos
      conexion.end();
    });
  });
});
*/