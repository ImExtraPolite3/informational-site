const { Router } = require('express');

const authorRouter = Router();

authorRouter.get('/', (req, res) => res.send('all authors'));
authorRouter.get('/:authors', (req, res) => {
  const { authorId } = req.params;
  res.send(`AuthorID; ${authorId}`);
});

module.exports = authorRouter;
