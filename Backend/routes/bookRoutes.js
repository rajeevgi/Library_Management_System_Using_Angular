const express = require('express');
const router = express.Router();
const libraryController = require('../controller/libraryController');

// Routes for Library Management System
router.get('/listAllBooks', libraryController.getAllBooks);
router.get('/getBookById/:id', libraryController.getBookById);
router.post('/addBook', libraryController.createBook);
router.delete('/deleteBookById/:id', libraryController.deleteBook);
router.put('/updateBookById/:id', libraryController.updateBook);

module.exports = router;

