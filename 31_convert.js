function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + "ft " + inchRemaining + "inch"
    return result;
}

// const rakibHeight = inchToFeet(75);

// console.log(rakibHeight, "Feet")

const rakibHeight2 = inchToFeet2(75);
console.log(rakibHeight2);

console.log();

function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const totalMile = mileToKilometer(150);
console.log(totalMile, "mile")