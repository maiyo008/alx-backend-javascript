export default function getListStudentsIds(getListStudents) {
  const students = getListStudents;
  if (Array.isArray(getListStudents)) {
    const ids = students.map((student) => student.id);
    return ids;
  }

  return [];
}
