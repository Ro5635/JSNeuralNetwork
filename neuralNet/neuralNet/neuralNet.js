const neuralNetwork = (function() {

	/**
	* getTeam
	*
	* Gets the team that the point should be on based on pure
	* mathematical reason.
	* 
	* point	Point object
	* decisionLine Line object
	*/
	function getAcurateTeam(point, decisionLine) {

		 let yValueAtPoint = (decisionLine.gradiant * point.x) + decisionLine.transpose;

		 if (point.y > yValueAtPoint) {
		 	// above the line
		 	return 1;
		 } 

		 // below the line
		 return -1;

	} 


	function getRandomWeigths() {

		// a set of random weights
		const randomWeights = {
			x: Math.floor(Math.random() * (1 - -1 + 1)) + -1,
			y: Math.floor(Math.random() * (1 - -1 + 1)) + -1

		}

		return randomWeights;
		
	}


	// need to take thouse random weights and train them so that they result in the correct team guess.

	function train(point, weights, correctTeam){

		const guessResult = guess(point, weights);
		const error = correctTeam - guessResult;
		const learningFactor = 0.1;

		// Create new ajusted weights
		const adjustedWeights = {
			x: weights.x + (point.x * error * learningFactor),
			y: weights.y + (point.y * error * learningFactor)
		}

		return adjustedWeights;

	}

	/**
	* guessTeam
	*
	* Using the neural net take a guess at the team that the point should be placed in
	*/
	function guess(point, weights) {

		const expression = (point.x * weights.x) + (point.y * weights.y);

		if (expression > 0) {
			return 1
		} else {
			return -1
		}

	}


	/**
	* getTrainedWeights
	*
	* Takes weights and attempts to improve them by training them with the provided correct examples
	*/
	function getTrainedWeights(startingWeights, correctExamples) {

		let weights = startingWeights;

		for (const correctExample of correctExamples) {
			weights = train(correctExample, weights, correctExample.correctGuess);
		}

		return weights;

	}


	/**
	* Exposed interface
	*
	* Having a play around with structuring the module in a closure like this
	* means duplication of the function names as they have to be added to the exposed interface below.
	* May never change this back to a standard pattern being this a play around...
	*/
  return {
    getAcurateTeam: getAcurateTeam,
    getRandomWeigths: getRandomWeigths,
    train: train,
    guess: guess,
    getTrainedWeights: getTrainedWeights

    };   
});

exports.getNetwork = neuralNetwork;


module.exports = exports;