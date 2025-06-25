const convertToCelsius = function(num) // convertToCelsius(32), fahrenheit to celsius, should return 0
{
  /**
   * 	x°F ≘ (x − 32) × ⁠5/9°C
   */
  return Math.round( ((num - 32) * (5/9)) * 10) / 10;

};

const convertToFahrenheit = function(num) // convertToFahrenheit(0), celsius to fahrenheit, should return 32
{
  /**
   * x°C ≘ (x × ⁠9/5 + 32)°F
   */
  return Math.round( (num * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
