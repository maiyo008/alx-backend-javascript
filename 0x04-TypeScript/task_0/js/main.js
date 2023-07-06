var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'London'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
