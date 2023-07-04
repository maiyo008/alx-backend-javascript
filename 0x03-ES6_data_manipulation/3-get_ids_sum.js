export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const sumIds = students.reduce((accumulator, student) => accumulator + student.id, initialValue);
  return sumIds;
}
