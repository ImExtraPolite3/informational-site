const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
      fs.readFile('index.html', function (err, data) {
        res.write(data);
        console.log(USER);
        return res.end();
      });
    } else if (req.url === '/about') {
      fs.readFile('about.html', function (err, data) {
        res.write(data);
        return res.end();
      });
    } else if (req.url === '/contact') {
      fs.readFile('contact-me.html', (err, data) => {
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('404.html', (err, data) => {
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
