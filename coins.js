console.log("hello js")

// ***Variables***
var button = document.getElementById("submit");
var input = document.getElementById("input");
var output = document.getElementById("output");

function getRemainder(total, value){
    return total % value;
}

function getChange(total) {
    // console.log(total);
    var coinPurse = {};
    coinPurse.quarters = Math.floor(total / 25);
    // console.log(coinPurse);
    coinPurse.dimes = Math.floor(getRemainder(total,25) / 10)
    coinPurse.nickels = Math.floor(getRemainder(total,10) / 5)
    coinPurse.pennies = Math.floor(getRemainder(total,5) / 1)
    console.log(coinPurse);
}





function getInput(){
    getChange(input.value);
}

button.addEventListener("click", getInput);




// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.


//   Input: 0.67
//   Output:
//   {
//     quarters: 2,
//     dimes: 1,
//     nickels: 1,
//     pennies: 2
//   }



// function coinCounter () {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {};

//   coinPurse.quarters = 0;

//   return coinPurse;
// }

// var coins = coinCounter()
// console.log();