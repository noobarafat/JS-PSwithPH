/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
// While loop 
let oddNum = 60;
while (oddNum <= 100) {
    if (oddNum % 2 != 0) {
        console.log('Odd Numbers:', oddNum);
    }
    oddNum++;

}

// Using for loop

for (let oddNum = 61; oddNum <= 100; oddNum+=2) {
    console.log('Odd Numbers:', oddNum);

}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
// USing while loop
let evenNum = 78;
while (evenNum <= 98) {
    if (evenNum % 2 === 0) {
        console.log('Even Numbers:', evenNum);
    }
    evenNum++;

}

// using for loop
for (let evenNum = 78; evenNum <= 98; evenNum += 2){
    console.log('Even Numbers:', evenNum);
}


/*programming hero*/