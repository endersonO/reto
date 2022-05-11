class NumberValueObject {
  public value: number;
  constructor(value: number) {
    this.value = value;
  }

  public isEqual(other: NumberValueObject): boolean {
    return this.value === other.value;
  }

  public isGreaterThan(other: NumberValueObject): boolean {
    return this.value > other.value;
  }

  public isLowerThan(other: NumberValueObject): boolean {
    return this.value < other.value;
  }
}

export default NumberValueObject;
