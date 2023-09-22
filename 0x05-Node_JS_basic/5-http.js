const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
      }

      const students = data.trim().split('\n').map((line) => line.split(','));
      students.shift();
      const totalStudents = students.length;

      const fieldCounts = students.reduce((counts, student) => {
        const field = student[3];
        counts[field] = (counts[field] || 0) + 1;
        return counts;
      }, {});

      const firstNamesByField = students.reduce((names, student) => {
        const field = student[3];
        names[field] = names[field] || [];
        names[field].push(student[0]);
        return names;
      }, {});

      let output = `Number of students: ${totalStudents}\n`;

      for (const field in fieldCounts) {
        const count = fieldCounts[field];
        const names = firstNamesByField[field].join(', ');
        output += `Number of students in ${field}: ${count}. List: ${names}\n`;
      }

      resolve(output);
    });
  });
}

const hostname = '127.0.0.1';
const port = 1245;

if (process.argv.length <= 2) {
  pathToFile = 'database.csv';
} else {
  const pathToFile = process.argv[2];
}

const app = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students' && method === 'GET') {
    countStudents(pathToFile)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
