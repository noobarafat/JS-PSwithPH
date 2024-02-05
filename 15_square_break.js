/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for(let i = 4; i<=100; i++){
    if(Math.sqrt(i)%1===0){
        console.log("Encountered the first square number:", i);
        break;
    }
}