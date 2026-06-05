class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273) return;
    this._celsius = value;
  }
}

const normalTemperature = new Temperature(0);

normalTemperature.celsius = 50;
normalTemperature.celsius = -350;
console.log(normalTemperature.celsius);

