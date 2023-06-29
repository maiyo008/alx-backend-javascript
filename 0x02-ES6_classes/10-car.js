const brandKey = Symbol('brand');
const motorKey = Symbol('motor');
const colorKey = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandKey] = brand;
    this[motorKey] = motor;
    this[colorKey] = color;
  }

  cloneCar() {
    const { constructor } = this;
    const clonedCar = new constructor(this[brandKey], this[motorKey], this[colorKey]);
    return clonedCar;
  }
}
