class Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }

  [key: string]: any; // Allow adding any attribute to the object

  toString(): string {
    const attributes = Object.getOwnPropertyNames(this)
      .map((key) => [key, this[key]])
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    return `Object\n${attributes}`;
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3.toString());
