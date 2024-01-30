let fruits = ['Apple', 'Banana', 'watermelon', 'Cocunut', 'Pinut'];

const target = 'Banana';
let foundIndex = -1;
for (let i = 0; i < fruits.length; i++) {
    const currentFruit = fruits[i];
    if (currentFruit == target) {
        foundIndex = i;
    }
}

if (foundIndex > -1) {
    console.log(foundIndex, 'founded');
}

else {
    console.log('Not Found');
}






