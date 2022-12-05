import { MESSAGES, SHOTS_MAP } from './constants.js';

const SHOT_LIST = ['rock', 'paper', 'scissors', null];

const compareShots = (playerShot, machineShot) => {

	return (playerShot == machineShot)
		? { value: 0, message: 'Draw !' }
		: SHOTS_MAP[`${playerShot}-${machineShot}`]
}

const getPlayerShot = (roundNo) => {
	let option;
	let errorMessage = '';

	while (SHOT_LIST.indexOf(option) < 0) {
		let txtPrompt = `Round ${roundNo}\n`
		txtPrompt += `${errorMessage}\nChoose your Shot: rock, paper or scissors.`
		
		option = prompt(txtPrompt)

    if (option == null){
      if (!confirm('Wanna Give up?')){
        option = -1
        continue
      }

    } else {
      option = option.toLowerCase().replaceAll(/\s/g,'')
    }      
  

		errorMessage = (SHOT_LIST.indexOf(option) < 0)
			? MESSAGES.validation[Math.floor(Math.random() * MESSAGES.validation.length)]
			: ""
	}
	return  (option== null) ? null : SHOT_LIST[SHOT_LIST.indexOf(option)] 
}

const playRound = (roundNo) => {
	let objResult = {};
	let playerShot = getPlayerShot(roundNo);
	let machineShot = SHOT_LIST[Math.floor(Math.random() * 3)];

	objResult.shotMessage = 
		`Round: ${roundNo}       Player Shot: ${playerShot}      Machine Shot: ${machineShot}`,
		MESSAGES[`round${roundNo}`][1]

	objResult.result = (playerShot == null) 
	? null
	: compareShots(playerShot, machineShot)

	return objResult;
}

console.clear();
console.log(`\n \n \n \n \n \n \n \n\n \n \n`);
console.log(...MESSAGES.begin);

const game = () => {
	let consoleMsg = ""
	let scorePlayer = 0;
	let scoreMachine = 0;

	for (let i = 1; i <= 5; i++) {
		let matchResult = playRound(i);

		if (matchResult.result == null){
        scorePlayer = -1;
        scoreMachine = -1;
        break
		}

		if (matchResult.result.value !== 0) {
			(matchResult.result.value == 1) ? scorePlayer++ : scoreMachine++
		}

		consoleMsg = `%c` + 
		`${matchResult.shotMessage} \n`+
		`Result: ${matchResult.result.message} \n`+
		`Scores: Player: ${scorePlayer}, Machine: ${scoreMachine}`
		console.log( consoleMsg, MESSAGES[`round${i}`][1]);

		if (scoreMachine == 3 || scorePlayer == 3) {
			break
		}
	}
	
	if ( scorePlayer == -1 && scoreMachine == -1 ) {
		console.log( ... MESSAGES.giveUp) 
	}
	else {
		console.log( ... (scorePlayer == scoreMachine) 
			? (MESSAGES.draw)
			: (scorePlayer > scoreMachine) ? [...MESSAGES.win] : [...MESSAGES.lost]
		)
	}
}
game()
