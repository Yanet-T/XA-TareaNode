
/*const express = require('express');
const libroController = require ('../controllers/libroController');

const router = express.Router();



router.get('/libros-todos', libroController.getAllLibros);
module.exports = router;*/

const express = require('express');
const bookController = require('../controllers/libroController');
const router = express.Router();

router.get('/todos-libros', bookController.getAllBooks);
router.get('/libro/:id', bookController.getBookById);
router.post('/libronuevo', bookController.createBook);
router.put('/libro/:id', bookController.updateBook);


module.exports = router;

