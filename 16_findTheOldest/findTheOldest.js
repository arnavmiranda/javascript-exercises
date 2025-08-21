const findTheOldest = function(arr) {
    let oldest;
    let max = 0;

    for (let pers of arr) {
        if (pers.yearOfBirth < 1900) return pers;
        if("yearOfDeath" in pers && (pers.yearOfDeath - pers.yearOfBirth) > max) {
            max = pers.yearOfDeath - pers.yearOfBirth;
            oldest = pers;
        }
    }
    return oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
