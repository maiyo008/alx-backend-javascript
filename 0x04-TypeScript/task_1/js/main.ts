class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    { yearsOfExperience, ...additionalAttributes }: { yearsOfExperience?: number; [key: string]: any }
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = yearsOfExperience;

    for (const key in additionalAttributes) {
      this[key] = additionalAttributes[key];
    }
  }

  toString(): string {
    const attributes = Object.getOwnPropertyNames(this)
      .map((key) => [key, this[key]])
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    return `Object\n${attributes}`;
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director: Directors = new Teacher(
  "John",
  "Doe",
  true,
  "London",
  { yearsOfExperience: 10 }
) as Directors; // Use type assertion to specify the Director type

director.numberOfReports = 5;

console.log(director.toString());

// Task 3
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;

  return fullName;
};

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe

// Task 4
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student: StudentInterface = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working


