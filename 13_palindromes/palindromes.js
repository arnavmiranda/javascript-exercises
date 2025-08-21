const palindromes = function (string) {
    string = string.toLowerCase().split('').filter(char => {
        return (char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
               (char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0));
    });

    const reverseString = string.slice().reverse().join('');
    return reverseString === string.join('');
};

// Do not edit below this line
module.exports = palindromes;
