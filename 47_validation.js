function multiply(num1, num2) {
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 7);
console.log(result);


function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof second !== 'string') { return "Second name should be a string" }
    const full = first + '' + second;
    return full;

}

const full = fullName('Akmal')
console.log(full)
