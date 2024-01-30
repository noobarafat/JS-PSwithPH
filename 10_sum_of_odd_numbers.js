
// Subtask-1:

// Display sum of all the odd numbers from 81 to 131.

// using while loop

oddNum = 81;
oddSum = 0;
while (oddNum <= 131) {

    if (oddNum % 2 != 0) {
        oddSum = oddNum + oddSum;
        console.log('Sum of odd numbers', oddSum);
    }
    oddNum++;
}

// using for loop
let oddSum = 0;
for (let oddNum = 81; oddNum <= 131; oddNum += 2) {
    oddSum = oddNum + oddSum;
    console.log('Sum of odd numbers', oddSum);
}

// Subtask-2:

// Display sum of all the even numbers from 206 to 311.


evenNum = 206;
evenSum = 0;
while (evenNum <= 311) {

    if (evenNum % 2 === 0) {
        evenSum = evenNum + evenSum;
        console.log('Sum of even numbers', evenSum);

    }
    evenNum++;
}

// Using for loop
let evenSum = 0;
for (let evenNum = 206; evenNum <= 311; evenNum += 2) {
    evenSum = evenNum + evenSum;
    console.log('Sum of even numbers', evenSum);
}
