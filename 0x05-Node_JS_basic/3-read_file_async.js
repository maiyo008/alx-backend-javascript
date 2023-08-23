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
          const field = studentData[3]; // Assuming field is in the 4th column

          if (field && field !== 'field') {
            if (!fields[field]) {
              fields[field] = [];
            }

            fields[field].push(studentData[0]); // Assuming the name is in the 1st column
          }
        }

        // Create a list of students as a string
        let studentsList = '';
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            studentsList += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }

        resolve(studentsList); // Resolve with the list of students as a string
      }
    });
  });
}

module.exports = countStudents;
