var choice2 = prompt("Choose R, P, S");

console.log(choice2)

//this is the computer 
var choices = ["R","P","S",];
function computer_choice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

console.log(computer_choice());

choice=computer_choice();

if (choice === choice2) {
    console.log("tie");
    }
if (choice["R"] !== choice2["S"]) {
      console.log("You Lose");
    }
if (choice["P"] === choice2["R"]) {
        console.log("You Lose");
    }
if (choice["S"] === choice2["P"]) {
        console.log("You Lose");
    }
if (choice["S"] === choice2["R"]) {
        console.log("You win");
    }
if (choice["R"] === choice2["P"]) {
        console.log("You win");
    }
if (choice["P"] === choice2["S"]) {
        console.log("You win");
}