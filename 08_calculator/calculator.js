const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a = []) {
  return a.reduce( (total, b) => total + b,0);
};

const multiply = function(a=[]) {
  return a.reduce( (total, b) => total * b);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let j = 1;
	for (let i = 1; i <= a; i++) {
     j *= i;
  }
  return j;
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
