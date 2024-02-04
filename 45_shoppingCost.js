const products = [
    {
        name: 'shampoo', price: 300, quantity: 2
    },
    {
        name: 'Bag', price: 1300, quantity: 1
    },
    {
        name: 'Pant', price: 900, quantity: 5
    },
    {
        name: 'Shirt', price: 1300, quantity: 3
    }
];

// function getShoppingCost(products) {
//     let total = 0;
//     for (const product of products) {
//         total = total + product.price;
//     }
//     return total;
// }
// const total = getShoppingCost(products);
// console.log("Today's total shopping cost:", total);

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost)