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
