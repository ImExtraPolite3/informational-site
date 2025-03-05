const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorsController');
const authorRouter = Router();

authorRouter.get('/author', (req, res) => res.send('all routers'));
authorRouter.get('/:authorId', getAuthorById);

module.exports = authorRouter;
