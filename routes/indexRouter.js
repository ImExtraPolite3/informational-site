const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('index'));
indexRouter.get('/:index', (req, res) => {
  const { indexID } = req.params;
  res.send(`IndexID: ${indexID}`);
});

module.exports = indexRouter;
