// 1 = rock
// 2 = paper
// 3 = scissors

counter = computerScore = humanScore = 0;

function getComputerChoice() {
    //return getRandomInt(3) + 1;
    return 1;
}

function getHumanChoice() {
    let human_result = prompt("Please enter your choice", "Paper");

    switch ( human_result.toLowerCase() ){
        case ( "rock") :
            return 1;
        case ( "paper") :
            return 2;
        case ( "scissors"):
            return 3;
        default:
            return 4;
    }
}

function playRound( human_choice , computer_choise ) {
    counter++;
    switch ( human_choice ){
        case 1 :
            humanScore += (computer_choise === 3) ? 1 : 0;
            computerScore += (computer_choise === 2) ? 1 : 0;
            break;
        case 2 :
            humanScore += (computer_choise === 1) ? 1 : 0;
            computerScore += (computer_choise === 3) ? 1 : 0;
            break;
        case 3 :
            humanScore += (computer_choise === 2) ? 1 : 0;
            computerScore += (computer_choise === 1) ? 1 : 0;
            break;
        case 4 :
            alert("Wrong input, try again.");
            counter--;
            break;
        default:

    }

    if ( counter === 1 ){
        if (humanScore > computerScore){
            console.log("Human wins");
        }else if (humanScore < computerScore) {
            console.log("Computer wins");
        }else{
            console.log("It's a draw");
        }
    }

}
// getComputerChoice();
// getHumanChoice();
playRound( getHumanChoice(), getComputerChoice() );
