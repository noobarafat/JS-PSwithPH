let fruits = ['Apple', 'Banana', 'watermelon', 'Cocunut', 'Pinut'];
let nums = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    sum = sum + currentNumber;
}

console.log('Sum:', sum);