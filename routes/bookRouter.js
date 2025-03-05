const { Router } = require('express');
const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('all books'));
bookRouter.get('/:books', (req, res) => {
  const { bookId } = req.params;
  res.send(`BookID: ${bookId}`);
});

module.exports = bookRouter;
