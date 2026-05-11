function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  return `${celsius}°C = ${fahrenheit}°F`
}

console.log(celsiusToFahrenheit(21));
console.log(celsiusToFahrenheit(14));
console.log(celsiusToFahrenheit(32));
