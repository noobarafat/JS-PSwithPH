/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


/*programming hero*/

console.log("Enter Multiplication Number: 5");
console.log("Enter Range: 10")

for (i = 1; i <= 10; i++) {
    let result = 5 * i;
    console.log(`5 * ${i} = ${result}`);
}

let i = 1;
while (i <= 10) {
    const result = i * 5;
    console.log(`5 * ${i} = ${result}`);
    i++;
}