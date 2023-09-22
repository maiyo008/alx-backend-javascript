const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
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

    for (const field of Object.keys(fieldCounts)) {
      const count = fieldCounts[field];
      const names = firstNamesByField[field].join(', ');

      console.log(`Number of students in ${field}: ${count}. List: ${names}`);
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
