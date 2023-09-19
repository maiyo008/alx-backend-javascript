const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.trim().split('\n').map((line) => line.split(','));

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

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

    for (const field in fieldCounts) {
      if (fieldCounts.hasOwnProperty(field)) {
        const count = fieldCounts[field];
        const names = firstNamesByField[field].join(', ');

        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      }
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
