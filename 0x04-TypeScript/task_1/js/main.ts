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

// Example usage
const teacher: Teacher = new Teacher(
  "John",
  "Doe",
  true,
  "London",
  {
    yearsOfExperience: 5,
    contract: true,
    subject: "Math",
  }
);

console.log(teacher.toString());
