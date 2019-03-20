
console.log("send some text to the teminal for barking function")

function bark(name, weight){
    if(weight >= 20){
        console.log( name+ " says WOOF WOOF")
    }else{
        console.log(name + " says woof woof")
    }
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);