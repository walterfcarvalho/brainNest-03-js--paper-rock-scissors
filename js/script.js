import {SHOTS_MAP, MSG } from './constants.js';

console.clear();
console.log(`\n\n\n\n\n\n\n\n`);

console.log(...MSG.begin);

const SHOT_LIST = ['Rock', 'Paper', 'Scissors'];

const getChoice = shotNumber => SHOT_LIST[shotNumber];

const compareShots = (playerShot, machineShot) => {
	return (playerShot == machineShot)
		? { value: 0, message: 'Draw !' }
		: SHOTS_MAP[`${playerShot}-${machineShot}`]
}

const getMachineShot = () => getChoice(Math.floor(Math.random() * 3));

const getPlayerShot = (roundNo) => {
	let validValues = ["1", "2", "3"]
	let option;
	let errorMessage = '';

	while (validValues.indexOf(option) < 0) {
		let txtPrompt = `Round ${roundNo}\n`
		txtPrompt += `${errorMessage}\nChoose yout Shot, 1:Rock, 2:Paper, 3:Scissors.`
		
		option = prompt(txtPrompt)

		errorMessage = (validValues.indexOf(option) < 0)
			? MSG.validation[Math.floor(Math.random() * MSG.validation.length)]
			: ""
	}
	return getChoice(option - 1);
}

const playRound = (roundNo) => {
	let playerShot = getPlayerShot(roundNo);
	let machineShot = getMachineShot(roundNo);

	console.log(`\nRound ${roundNo} `)
	console.log(`Player Shot: ${playerShot}  -  Machine Shot: ${machineShot}`)

	return compareShots(playerShot, machineShot)
}

const game = () => {
	let scorePlayer = 0;
	let scoreMachine = 0;

	for (let i = 1; i <= 5; i++) {
		let matchResult = playRound(i);

		if (matchResult.value !== 0) {
			(matchResult.value == 1) ? scorePlayer++ : scoreMachine++
		}

		console.log(`Result: ${matchResult.message}`)
		console.log(`Scores: Player: ${scorePlayer}, Machine: ${scoreMachine}`);

		if (scoreMachine >= 3 || scorePlayer >= 3) {
			break
		}
	}
	
	console.log( ... (scorePlayer == scoreMachine) 
		? (MSG.draw)
		: (scorePlayer > scoreMachine) ? [...MSG.win] : [...MSG.lost]
	)
}
game()
