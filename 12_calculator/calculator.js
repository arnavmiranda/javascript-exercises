const add = function(...args) {
	return args.reduce((sum, num) => sum + num, 0);
};

const subtract = function(first, ...args) {
	return first - args.reduce((sum, num) => sum + num, 0);
};

const sum = function(arr) {
	return add(...arr);
};

const multiply = function(arr) {
  return arr.reduce((sum, num) => sum * num, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	let i = 1;
  for(let j = 1; j <= arguments[0]; j++) {
    i *= j;
  }
  return i;
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
