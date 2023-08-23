const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFileName = process.argv[2];
  countStudents(databaseFileName)
    .then((studentsList) => {
      res.send(`This is the list of our students\n${studentsList}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error}\n`);
    });
});

app.use((req, res) => {
  res.status(404).send('Not Found\n');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
