

//this is the computer 
var choices = ["R","P","S",];
function computer_choice() {
    return choices[Math.floor(Math.random()*choices.length)];
}


for(var i = 0; i < 10; i++) {
    var choice=computer_choice().toLowerCase();
    console.log(choice)
    var choice2 = prompt("Choose R, P, S").toLowerCase();
    console.log(choice2)
    if (choice === choice2) {
        console.log("tie");
        }
     else if (choice2 ==="r" && choice === "s" ) {
          console.log("You Win");
        }
    else if (choice2 === "r" && choice === "p") {
            console.log("You Lose");
        }
    else if (choice2 === "s" && choice === "p") {
            console.log("You Win");
        }
    else if (choice2 === "s" && choice === "r") {
            console.log("You Lose");
        }
    else if (choice2 === "p" && choice === "r") {
            console.log("You Win");
        }
        else if (choice2 === "p" && choice === "s") {
            console.log("You Lose");
        }
}