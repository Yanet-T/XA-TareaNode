//Probar base de datos:
//localhost:3000/user/users
//localhost:3000/library/libreria/2
//localhost:3000/library/todas-librerias
//localhost:3000/book/todos-libros
//localhost:3000/book/libro/1




const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const librosRoutes = require('./src/routes/librosRoutes');
const libraryRoute = require('./src/routes/libreriaRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/user', userRoutes);
app.use('/book', librosRoutes);
app.use('/library', libraryRoute);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});




//Conextion a base de datos
const mysql = require('mysql');

const conexion = mysql.createConnection({
host:'localhost',
database:'nodeTarea',
user:'root',
password:'123123',
});


conexion.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
      return;
    }
  
    console.log('Conexión exitosa a la base de datos');})



