const add = function(first, second) {
    return first + second;
};

const subtract = function(first, second) {
    return first - second;
};

const sum = function(nums) {
    return nums.reduce((total, current) => total + current, 0);
};

const multiply = function(nums) {
    let prod = 1;

    for (let i = 0; i < nums.length; i++) {
        prod *= nums[i];
    }

    return nums.reduce((total, current) => total * current, 1);
};

const power = function(num, pow) {
    let prod = num;

    if (pow == 0) {
        return 1;
    }

    for (let i = 1; i < pow; i++) {
        prod = multiply([prod, num]);
    }

    return prod;
};

const factorial = function(val) {
    if (val == 0) {
        return 1;
    }

    return factorial(val - 1) * val;
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
