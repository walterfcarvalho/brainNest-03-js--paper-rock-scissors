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
const VALIDATIONS_MSG = [
    "No, no no, you should choose 1,2 or 3.",
    "Duh! there is only three options 1,2 or 3.",
    "Keep calm and choose 1,2 or 3. ",
    `if you are a machine, I'll explain in your language: 
    01000011 01101000 01101111 01101111 01110011 01100101 
    00100000 01111001 01101111 01110101 01110100 00100000 
    01010011 01101000 01101111 01110100 00101100 00100000 
    00110001 00111010 01010010 01101111 01100011 01101011 
    00101100 00100000 00110010 00111010 01010000 01100001 
    01110000 01100101 01110010 00101100 00100000 00110011 
    00111010 01010011 01100011 01101001 01110011 01110011 
    01101111 01110010 01110011`    
] 

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
        txtPrompt += `${errorMessage}\nChoose yout Shot, 1:Rock, 2:Paper, 3:Scissors.`
        option = prompt(txtPrompt)

        errorMessage = (validValues.indexOf(option) < 0) 
        ? VALIDATIONS_MSG[Math.floor(Math.random() * VALIDATIONS_MSG.length)]
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
