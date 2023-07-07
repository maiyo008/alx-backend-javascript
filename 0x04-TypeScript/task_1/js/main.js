var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, _a) {
        var yearsOfExperience = _a.yearsOfExperience, additionalAttributes = __rest(_a, ["yearsOfExperience"]);
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
        for (var key in additionalAttributes) {
            this[key] = additionalAttributes[key];
        }
    }
    Teacher.prototype.toString = function () {
        var _this = this;
        var attributes = Object.getOwnPropertyNames(this)
            .map(function (key) { return [key, _this[key]]; })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return key + ": " + value;
        })
            .join('\n');
        return "Object\n" + attributes;
    };
    return Teacher;
}());
// Example usage
var director = new Teacher("John", "Doe", true, "London", { yearsOfExperience: 10 }); // Use type assertion to specify the Director type
director.numberOfReports = 5;
console.log(director.toString());
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    var fullName = firstLetter + ". " + lastName;
    return fullName;
};
// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage
var student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
