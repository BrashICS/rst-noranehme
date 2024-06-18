let choices = ["rock", "paper", "scissors"];

document.getElementById("rockbutton").addEventListener("click", rockround);
document.getElementById("paperbutton").addEventListener("click", paperround);
document.getElementById("scissorsbutton").addEventListener("click", scissorround);

function rockround() {
    console.log("rock")
    let puterchoice = choices[Math.floor(Math.random() * choices.length)];
    if ("rock" == puterchoice) {
        document.getElementById("RPSWINNER").innerHTML = "It's a tie... you both chose rock"
    } else if (
        ("rock" == "rock" && puterchoice == "scissors") ||
        ("rock" == "paper" && puterchoice == "rock") ||
        ("rock" == "scissors" && puterchoice == "paper")
    ) {
        document.getElementById("RPSWINNER").innerHTML = "You won...! rock beats " + (puterchoice);

    } else {

        document.getElementById("RPSWINNER").innerHTML = "You lose... : ( " + (puterchoice) + " beats rock"
    }
}
function paperround() {
    console.log("paper")

    let puterchoice = choices[Math.floor(Math.random() * choices.length)];
    if ("paper" == puterchoice) {
        document.getElementById("RPSWINNER").innerHTML = "It's a tie... you both chose paper";
    } else if (
        ("paper" == "rock" && puterchoice == "scissors") ||
        ("paper" == "paper" && puterchoice == "rock") ||
        ("paper" == "scissors" && puterchoice == "paper")
    ) {

        document.getElementById("RPSWINNER").innerHTML = "You won...! paper beats " + (puterchoice);
    } else {
        document.getElementById("RPSWINNER").innerHTML = "You lose... : ( " + (puterchoice) + " beats paper";
    }
}
function scissorround() {
    console.log("scissor")

    let puterchoice = choices[Math.floor(Math.random() * choices.length)];
    if ("scissor" == puterchoice) {
        document.getElementById("RPSWINNER").innerHTML = "It's a tie... you both chose scissors"
    } else if (
        ("scissor" == "rock" && puterchoice == "scissors") ||
        ("scissor" == "paper" && puterchoice == "rock") ||
        ("scissor" == "scissors" && puterchoice == "paper")
    ) {

        document.getElementById("RPSWINNER").innerHTML = "You won...! scissor beats " + (puterchoice)
    } else {
        document.getElementById("RPSWINNER").innerHTML = "You lose... : ( " + (puterchoice) + " beats scissors"
    }
}
