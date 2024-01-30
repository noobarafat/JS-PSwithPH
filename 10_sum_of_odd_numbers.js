
// Subtask-1:

// Display sum of all the odd numbers from 81 to 131.

oddNum = 81;
oddSum = 0;
while (oddNum <= 131) {

    if (oddNum % 2 != 0) {
        oddSum = oddNum + oddSum;
        console.log('Sum of odd numbers', oddSum);
    }
    oddNum++;
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
