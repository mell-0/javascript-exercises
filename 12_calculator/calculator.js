const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;

  for (let num of arr)
    total += num;
  
  return total;
};

const multiply = function(arr) {
  let total = 1;

  for (let num of arr)
    total *= num;
  
  return total;
};

const power = function(a, b) {
	return a**b;
};

let factorial = function(n) {
  
  if (n < 2)
  {
    return 1;
  }
  
  return n * factorial(n-1);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
