const biriyanikhor = ["Taifur", 'Nehal', "Jamil", "Noman", "Rabbi", "Turzo", "Jamil", "Rabbi", "Taifur"];

const numbers = [1, 4, 45, 1, 78, 546, 34, 5, 3, 2, 5, 8, 3];

function noDuplicate(arr) {
    const unique = [];
    for (const item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueBiriyaniKhor = noDuplicate(biriyanikhor);
console.log(uniqueBiriyaniKhor);
