/*

* shirt price --> 500
* pant price --> 300
* shoe price --> 900

*/

function clothesPrice(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtTotalPrice = shirtQuantity * perShirtPrice;
    const pantTotalPrice = pantQuantity * perPantPrice;
    const shoeTotalPrice = shoeQuantity * perShoePrice;

    const clothesTotalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return clothesTotalPrice;

}

const totalPrice = clothesPrice(4,2,1);
console.log("Total Price:", totalPrice);