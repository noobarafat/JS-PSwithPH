

const mobiles = [
    {
        name: "Samsung", price: 20000, camera: '12mp', color: 'Deep Green'
    },
    {
        name: "Xiomi", price: 8000, camera: '12mp', color: 'black'
    },
    {
        name: "Oppo", price: 50000, camera: '12mp', color: 'black'
    },
    {
        name: "Walton", price: 21000, camera: '12mp', color: 'black'
    },
    {
        name: "Itel", price: 29000, camera: '12mp', color: 'black'
    },
    {
        name: "Apple", price: 120000, camera: '12mp', color: 'Titanium'
    }
];

function getExpensivePhone(mobiles) {
    let max = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price > max.price)
            max = mobile;
    }
    return max;
}
const cheap = getExpensivePhone(mobiles)
console.log("Expensive phone is:", expensive)