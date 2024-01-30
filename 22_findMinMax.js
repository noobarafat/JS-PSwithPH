let arr = [45, 67, 34, 2, 57, 2];
let maxNum = arr[0];
let minNum = arr[0];

for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (maxNum < currentNumber) {
        maxNum = currentNumber;
    }
    if (minNum > currentNumber) {
        minNum = currentNumber;
    }
}

console.log(minNum,maxNum);

