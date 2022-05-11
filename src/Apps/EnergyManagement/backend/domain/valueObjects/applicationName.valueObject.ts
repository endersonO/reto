class ApplicationName {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
    this.isAValidValue();
  }

  public isAValidValue(): void {
    if (!['EnergyManagement'].includes(this.value)) {
      throw new Error('Application name is not valid.');
    }
  }
}

export default ApplicationName;
