const heights = [65, 34, 65, 99, 54, 58, 78, 34, 23];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log("max value is", max);