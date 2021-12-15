let sentence = ""


const sentenceChoice = (noun, verb, adjective) => {
	let rNum = Math.floor(Math.random() * 3);

	if (rNum === 1) {

		return sentence = `The ${noun} was ${adjective} ${verb} while the ${noun}'s best friend watched`

	}
	else if (rNum === 2) {

		return sentence = `${verb} with the ${noun}, they both ${adjective} changed the tide of the battle`



	} else if (rNum === 3) {

		return sentence = `The young ${noun} was ${verb} in the leaves waiting for the ${adjective} wind to come`


	}
}


sentenceChoice("Keyboard", "stabbing", "Brutally");