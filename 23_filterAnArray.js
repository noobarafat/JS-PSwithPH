let purchaseHistory = [200, 455, 20, 45, 120, 78, 456];

// Using loop
let filteredPurchaseHistory = [];

for (let i = 0; i < purchaseHistory.length; i++) {
    const currentElement = purchaseHistory[i];
    if (currentElement <= 200) {
        filteredPurchaseHistory.push(currentElement);
    }
}

console.log(filteredPurchaseHistory);

// Using filter
let filteredPurchaseHistory2 = purchaseHistory.filter(function (currentElement) {
    return currentElement <= 200;
})

console.log(filteredPurchaseHistory2)