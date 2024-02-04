// const phonePrice = [23000, 30000, 34500, 55000, 120000, 145000, 210000];

// function getMin(numbers) {
//     let min = numbers[0];
//     for (const num of numbers) {
//         if (num < min) {
//             min = num;
//         }
//     }

//     return min;
// }

// const cheap = getMin(phonePrice);
// console.log("Cheapest one is:", cheap)


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

function getCheapestPhone(mobiles) {
    let min = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price < min.price)
            min = mobile;
    }
    return min;
}
const cheap = getCheapestPhone(mobiles)
console.log("Cheapest phone is:", cheap)