const WIN_MSG = 
`$$      $$                                      $$               
 $$    $$                                                       $$
  $$  $$  $$$$$$   $$    $$        $$   $$   $$  $$  $$$$$$$    $$
   $$$$  $$    $$  $$    $$        $$   $$   $$  $$  $$    $$   $$
    $$   $$    $$  $$    $$        $$   $$   $$  $$  $$    $$   $$
    $$   $$    $$  $$    $$        $$   $$   $$  $$  $$    $$        
    $$    $$$$$$    $$$$$$          $$$$$ $$$$   $$  $$    $$   $$`

const LOST_MSG =     
 `#     #                                                ###    
 #   #   ####  #    #    #       ####   ####  #####    ###    
  # #   #    # #    #    #      #    # #        #      ###    
   #    #    # #    #    #      #    #  ####    #       #     
   #    #    # #    #    #      #    #      #   #             
   #    #    # #    #    #      #    # #    #   #      ###    
   #     ####   ####     ######  ####   ####    #      ###                                                             
`
const DRAW_MSG = 
`
######  ######     #    #     #    ### 
#     # #     #   # #   #  #  #    ### 
#     # #     #  #   #  #  #  #    ### 
#     # ######  #     # #  #  #     #  
#     # #   #   ####### #  #  #        
#     # #    #  #     # #  #  #    ### 
######  #     # #     #  ## ##     ### 
`

console.clear();
console.log(`\n\n\n\n\n\n\n`);

const SHOT_LIST = ['Rock', 'Paper', 'Scissors'];

const getChoice = shotNumber => SHOT_LIST[shotNumber];

const compareShots = (playerShot, machineShot ) => {
    let ShotsMap = {
        'Rock-Paper': {value: -1, message: 'Rock is covered by Paper'},
        'Rock-Scissors': {value: 1, message: 'Rock breaks Scissors'},
        'Paper-Scissors': {value: -1, message: 'Paper is cutted by Scissors'},
        'Paper-Rock': {value:1, message: 'Paper covers Rock'},
        'Scissors-Rock': {value:-1, message: 'Scissors is breaked by Rock'},
        'Scissors-Paper': {value:1, message: 'Scissors cuts Paper' },
    }
    return ( playerShot == machineShot) 
    ? {value: 0, message: 'Draw !' }
    : ShotsMap[`${playerShot}-${machineShot}`]  
}

const getMachineShot = () => getChoice(Math.floor(Math.random() * 3) );

const getPlayerShot = (roundNo) => {
    let validValues = ["1","2","3"]
    let option;
    let errorMessage='';
    
    while (validValues.indexOf(option) < 0 ) {
        let txtPrompt = `Round ${roundNo}\n`
        txtPrompt += `${errorMessage}Choose yout Shot, 1:Rock, 2:Paper, 3:Scissors.`
        option = prompt(txtPrompt)

        errorMessage = (validValues.indexOf(option) < 0) 
        ? "You must choose 1, 2 or 3 \n" 
        : ""
    }
    return getChoice(option -1);
}

const playRound = (roundNo) => {
    let playerShot = getPlayerShot(roundNo);
    let machineShot = getMachineShot(roundNo);

    console.log(`Round ${roundNo} \n\nPlayer Shot: ${playerShot}  -  Machine Shot: ${machineShot} `)

    return compareShots( playerShot, machineShot ) 
}

function game() {
    let scorePlayer = 0;
    let scoreMachine = 0;
    
    for ( let i=1; i<=5; i++){
        let matchResult = playRound(i);

        if (matchResult.value !== 0) {
            (matchResult.value == 1) ? scorePlayer ++ : scoreMachine ++    
        }
        
        console.log(`Result: ${matchResult.message}`)
        console.log(`Scores: Player: ${scorePlayer}, Machine: ${scoreMachine}`);

        if (scoreMachine >= 3 || scorePlayer >= 3) {
            break
        }
    }
    console.log( `${ (scorePlayer == scoreMachine)? DRAW_MSG : (scorePlayer > scoreMachine) ? WIN_MSG: LOST_MSG}`)
}
game()
