import NumberValueObject from './number.valueObject';

class PortValueObject extends NumberValueObject {
  constructor(value: number) {
    super(value);
    this.isAValidValue();
  }

  isAValidValue(): void {
    if (this.isLowerThan(new NumberValueObject(3000) || this.isGreaterThan(new NumberValueObject(60000)))) {
      throw new Error('Port value is not valid.');
    }
  }
}

export default PortValueObject;
