export default function updateStudentGradeByCity(students, city, newGrades) {
  const filters = students.filter((student) => student.location === city);
  const updatedStudents = filters.map((filter) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === filter.id);
    if (matchingGrade) {
      filter.grade = matchingGrade.grade;
    } else {
      filter.grade = 'N/A';
    }
    return filter;
  });
  return updatedStudents;
}
