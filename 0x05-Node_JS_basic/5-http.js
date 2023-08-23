const http = require('http');

const countStudents = require('./3-read_file_async');

const databaseFileName = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(databaseFileName)
      .then((studentsList) => {
        res.end(`This is the list of our students\n${studentsList}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
