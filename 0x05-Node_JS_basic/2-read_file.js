const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.trim().split('\n').map((line) => line.split(','));
    students.shift();

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fieldCounts = students.reduce((counts, student) => {
      const field = student[3];
      return { ...counts, [field]: (counts[field] || 0) + 1 };
    }, {});

    const firstNamesByField = students.reduce((names, student) => {
      const field = student[3];
      return {
        ...names,
        [field]: [...(names[field] || []), student[0]],
      };
    }, {});

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field];
        const names = firstNamesByField[field].join(', ');

        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
