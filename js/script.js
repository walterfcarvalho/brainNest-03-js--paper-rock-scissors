import { MSG, SHOTS_MAP } from './constants.js';

console.clear();

console.log(`\n \n \n \n \n \n \n \n\n \n \n`);

console.log(...MSG.begin);

const SHOT_LIST = ['Rock', 'Paper', 'Scissors', null];

const getChoice = shotNumber => SHOT_LIST[shotNumber];

const compareShots = (playerShot, machineShot) => {
	return (playerShot == machineShot)
		? { value: 0, message: 'Draw !' }
		: SHOTS_MAP[`${playerShot}-${machineShot}`]
}

const getMachineShot = () => getChoice(Math.floor(Math.random() * 3));

const getPlayerShot = (roundNo) => {
	let validValues = ["1", "2", "3", null]
	let option;
	let errorMessage = '';

	while (validValues.indexOf(option) < 0) {
		let txtPrompt = `Round ${roundNo}\n`
		txtPrompt += `${errorMessage}\nChoose your Shot, 1:Rock, 2:Paper, 3:Scissors.`
		
		option = prompt(txtPrompt)

		errorMessage = (validValues.indexOf(option) < 0)
			? MSG.validation[Math.floor(Math.random() * MSG.validation.length)]
			: ""
	}
	return getChoice(option - 1);
}

const playRound = (roundNo) => {
	let objResult = {};
	let playerShot = getPlayerShot(roundNo);
	let machineShot = getMachineShot(roundNo);

	objResult.shotMessage = 
		`Round: ${roundNo}       Player Shot: ${playerShot}      Machine Shot: ${machineShot}`,
		MSG[`round${roundNo}`][1]

	objResult.result = (playRound == undefined) 
	? undefined
	: compareShots(playerShot, machineShot)

	return objResult;
}

const game = () => {
	let consoleMsg = ""
	let scorePlayer = 0;
	let scoreMachine = 0;

	for (let i = 1; i <= 5; i++) {
		let matchResult = playRound(i);

		if (matchResult.result == undefined){
			scorePlayer = -1;
			scoreMachine = -1;
			break;
		}

		if (matchResult.result.value !== 0) {
			(matchResult.result.value == 1) ? scorePlayer++ : scoreMachine++
		}

		consoleMsg = `%c` + 
		`${matchResult.shotMessage} \n`+
		`Result: ${matchResult.result.message} \n`+
		`Scores: Player: ${scorePlayer}, Machine: ${scoreMachine}`
		console.log( consoleMsg, MSG[`round${i}`][1]);

		if (scoreMachine == 3 || scorePlayer == 3) {
			break
		}
	}
	
	if ( scorePlayer == -1 && scoreMachine == -1 ) {
		console.log( ... MSG.giveUp) 
	}
	else {
		console.log( ... (scorePlayer == scoreMachine) 
			? (MSG.draw)
			: (scorePlayer > scoreMachine) ? [...MSG.win] : [...MSG.lost]
		)
	}
}
game()
