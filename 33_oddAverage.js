function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    // console.log(sum);
    const lengthCount = odds.length;
    const average = sum/lengthCount;
    return average;
}

const numbers = [45, 12, 56, 89, 43, 20, 79, 101, 10,1];
const average = oddAverage(numbers);
console.log("Average of the ODD numbers: ", average.toFixed(2));