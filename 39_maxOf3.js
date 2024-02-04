// const jim = 556;
// const mim = 86;
// const pim = 156;

// if (jim > mim && jim > pim) {
//     console.log("Jim is the ultimate boss");
// }

// else if (mim > jim && mim > pim) {
//     console.log("Mim is the ultimate boss");
// }

// else {
//     console.log("Pim is the ultimate boss")
// }

function maxOfThree(Fim, Bim, Dim) {
    if (Fim > Bim && Fim > Dim){
        return Fim;
    }
    else if(Bim>Fim && Bim>Dim){
        return Bim;
    }
    return Dim;
}

const result = maxOfThree(450, 457, 145)
console.log(result)