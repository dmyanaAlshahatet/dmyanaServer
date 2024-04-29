const express = require('express');

const DeleteController = require('../Controller/DeleteController');

const routes = new express.Router();

// Route to delete a resource by ID
routes.delete('/:id', DeleteController.deleteResource);
routes.post('/posts/:id/delete', DeleteController.store);
module.exports = routes;
