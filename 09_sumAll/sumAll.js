const sumAll = function(first, second) {
    if (typeof(first) !== "number" ||
       typeof(second) !== "number") {
        return 'ERROR';
    }
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
        return 'ERROR';
    }
    if (first < 0 || second < 0) {
        return 'ERROR';
    }

    let a = Math.min(first, second),
        b = Math.max(first, second);

    let sum = b * (b + 1) / 2;
    sum -= a * (a - 1) / 2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
