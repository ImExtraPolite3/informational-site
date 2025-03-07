const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');

app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];

const users = ['Rose', 'Cake', 'Biff'];

app.get('/', (req, res) => {
  res.render('index', { links: links, users: users });
});

// app.use('/author', authorRouter);
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send(err);
// });
// app.use('/books', bookRouter);
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send(err);
// });
// app.use('/', indexRouter);
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send(err);
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log('running');
});
