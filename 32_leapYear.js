// Year will be leap year if the year is divisible by 4

// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         return true
//     }
//     return false;
// }

// const isLipi = isLeapYear(2052)
// console.log(isLipi);


function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true
    }
    if (year % 100 === 0 && year % 400 === 0) {
        return true
    }
    return false;
}

const isLipi2 = isLeapYear2(2400)
console.log(isLipi2)
