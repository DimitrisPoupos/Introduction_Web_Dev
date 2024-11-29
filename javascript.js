// 1 = rock
// 2 = paper
// 3 = scissors



function getComputerChoice() {
    let result = Math.floor(Math.random() * 3 + 1) ;
    switch( result ){
        case 1 :
            console.log("Computer played Rock");
            break;
        case 2 :
            console.log("Computer played Paper");
            break;
        case 3 :
            console.log("Computer played Scissors");
            break;
        default:
            console.log("Computer Error"); 
    }
    return result;
}

function getHumanChoice() {
    let human_result = prompt("Please enter your choice", "Paper");

    switch ( human_result.toLowerCase() ){
        case ("rock") :
            return 1;
        case ("paper") :
            return 2;
        case ("scissors"):
            return 3;
        default:
            return 4;
    }
}

function playGame( ){
    counter = computerScore = humanScore = 0;

    function playRound( human_choice , computer_choise ) {
            counter++;
            if (human_choice == computer_choise){
                console.log("The round is a draw")
            }else if ( (human_choice === 1 && computer_choise === 2) || (human_choice === 2 && computer_choise === 3) || (human_choice === 3 && computer_choise === 1) ) {
                computerScore++;
                console.log("The round is won by the computer " + computerScore);
            }else{
                humanScore++;
                console.log("The round is won by you " + humanScore);
            }
        }

    for(let i= 0; i<5; i++){
        playRound( getHumanChoice(), getComputerChoice() );
    }

    if (humanScore > computerScore){
        console.log("Human wins");
    }else if (humanScore < computerScore) {
        console.log("Computer wins");
    }else{
        console.log("It's a draw");
    }

}
playGame( );
