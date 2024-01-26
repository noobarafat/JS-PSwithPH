/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 400;
let ticket = 800;
let student = true;

if (age < 10) {
    console.log('Free');
}

else if (age >= 60) {
    discount = ticket * 15 / 100;
    ticket = ticket - discount;
    console.log(ticket);
}

else if (student === true) {
    discount = ticket * 50 / 100;
    ticket = ticket - discount;
    console.log(ticket);
}


else {
    console.log(ticket)
}

