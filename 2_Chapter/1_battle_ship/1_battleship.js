// Constants  
let MISS = "MISS";
let HIT = "HIT";

let location1 = true;
let location2 = true;
let location3 = true;

var guess;

var guesses = 0;

var hits = 0;
var misses = 0;

let isSunk = false;

let container = [false, false, true, true, true, false, false, false];

console.log(MISS);
console.log(HIT);

while (!isSunk) {

    guess = prompt("Ready, aim, fire! (enter a number 0-6):");

    console.log("Guess: " + guess)
    guesses++;

    switch (guess) {
        case "3":
            location1 = false;
            hits++;
            break;
        case "4":
            location2 = false;
            hits++;
            break;
        case "5":
            location3 = false;
            hits++;
            break;
        default:
            misses++;
            break;
    }

    isSunk = checkIsSunk()
}

if (isSunk) {
    document.write("Ship has sunk");
    document.write("<br>");

    document.write("Miss: " + misses);

}



function checkIsSunk() {
    return !location1 && !location2 && !location3;
}

