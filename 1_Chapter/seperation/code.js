var bottles = "bottles";

var count = 99;

while (count > 0) {
    
    console.log(count + " " + bottles + " of bear on the wall");
    console.log(count + " " + bottles + " of beer");
    console.log("Take one down, pass it around");

    count--;

    if (count > 0) {
        console.log(count + " " + bottles + " of beer on the wall");
    } else {
        console.log("No more " + bottles + " of beer on the wall");
    }
}