const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', (err, data) => {
    res.write(data);
    return res.end();
  });
});

app.get('/about', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('about.html', (err, data) => {
    res.write(data);
    return res.end();
  });
});

app.get('/contact', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('contact-me.html', (err, data) => {
    res.write(data);
    return res.end();
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('someshit');
});
