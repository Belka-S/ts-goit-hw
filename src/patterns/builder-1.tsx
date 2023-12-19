class Car {
  constructor(
    public model: string,

    public year: number,

    public color: string,
  ) {}
}

class CarBuilder {
  private model: string;

  private year: number;

  private color: string;

  setModel(model: string): CarBuilder {
    this.model = model;

    return this;
  }

  setYear(year: number): CarBuilder {
    this.year = year;

    return this;
  }

  setColor(color: string): CarBuilder {
    this.color = color;

    return this;
  }

  build(): Car {
    return new Car(this.model, this.year, this.color);
  }
}

const builder1 = new CarBuilder();

const car = builder1
  .setModel('Tesla Model S')
  .setYear(2023)
  .setColor('Red')
  .build();

console.log(car); // Car {model: "Tesla Model S", year: 2023, color: "Red"}
