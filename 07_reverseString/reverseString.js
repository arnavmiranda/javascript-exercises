const reverseString = function(string) {
    return string.split("").reduce((acc, item) => item + acc, '');
}
// Do not edit below this line
module.exports = reverseString;
