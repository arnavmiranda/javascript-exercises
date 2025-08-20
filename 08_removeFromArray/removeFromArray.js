const removeFromArray = function(arr, ...args) {
    let res = [];
    for (const item of arr) {
        if (!args.includes(item)) {
            res.push(item);
        }
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
