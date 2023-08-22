const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const fields = {};

        for (const line of lines) {
          const studentData = line.split(',');
          const field = studentData[3];

          if (field && field !== 'field') {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(studentData[0]);
          }
        }

        let totalStudents = 0;
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            totalStudents += fields[field].length;
          }
        }

        console.log(`Number of students: ${totalStudents}`);
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
