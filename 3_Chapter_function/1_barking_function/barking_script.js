
console.log("send some text to the teminal for barking function")

function bark(name, weight){
    if(weight >= 20){
        console.log( name+ " says WOOF WOOF")
    }else{
        console.log(name + " says woof woof")
    }
}

var dogName = "rover";
var dogWeight = 23;

bark(dogName, dogWeight)

dogName = "Spot"
dogWeight = 15
bark(dogName, dogWeight)

dogName = "Spike"
dogWeight = 53
bark(dogName, dogWeight)