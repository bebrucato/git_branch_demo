alert();"Ready to play?"

var choice = confirm("Rock, Paper or Scissors?");
var choice2 = prompt("Choose R, P, S");

console.log(choice2)

var choices = ["R","P","S",];

function computer_choice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
console.log(computer_choice());

