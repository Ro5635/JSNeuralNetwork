/**
* neuralNetworkController
*
* Provides interface for interacting with the neural network
*
*/

const neuralNetwork = require('./neuralNet').getNetwork();
const pointsGenerator = require('./pointsGenerator');

// Draw some points onto a grid

const X_MAX  = 1100;
const Y_MAX = 1100;


/**
* getCorrectExamples
*
* Gets correct examples for use in training, this is possible because the problem is simple
* enough to be solved with pure mathematics. 
*/
function getCorrectExamples(numberToGet, gridMin, gridMax){

	const generatedPoints = pointsGenerator.getRandomPoints(numberToGet, gridMin, gridMax);

	for(const point of generatedPoints) {
		const correctTeam = neuralNetwork.getAcurateTeam(point);
		
		// Add the corerct guess
		point.correctGuess = correctTeam;

	}

	return generatedPoints;

}


/**
* convertToTeam
*
*/
function convertToTeam(number) {

	if (number >= 0){
		return 'blue';
	} else {
		return 'red';
	}

}

/**
* getVisual
*
* Gets a visual of a run of the neural network, this involves training a new weight set and
* generating points and a final SVG diagram showing the data.
*
*/
exports.getVisual = (X2Cord,Y2Cord) => {
	
	const correctExamples = getCorrectExamples(1500000, 0, 1100);
	const randomWeights = neuralNetwork.getRandomWeigths();

	const trainedWeights = neuralNetwork.getTrainedWeights(randomWeights, correctExamples);

	const randomPoints = pointsGenerator.getRandomPoints(800, 0, 1100);

	const generatedSVG = `<svg width="${X_MAX}" height="${Y_MAX}">

	${randomPoints.map(point => 
	      `<circle 
	         cx="${point.x}"
	         cy="${point.y}"
	         r="3"
	         fill="${convertToTeam(neuralNetwork.guess(point, trainedWeights))}"/>`
	    )}

	    <line x1="0" x2="${X2Cord}" y1="0" y2="${Y2Cord}" stroke="purple" />
	  </svg>`;

	return generatedSVG;
}

/**
* getVisualByMath
*
* Gets a svg visual where the points are sorted into teams based on
* mathematics. As a result is accurate and correct.
*/
exports.getVisualByMath = (X2Cord,Y2Cord) => {
	const randomPoints = pointsGenerator.getRandomPoints(300, 0, 1100);

	const generatedSVG = `<svg width="${X_MAX}" height="${Y_MAX}">

	   
	${randomPoints.map(point => 
	      `<circle 
	         cx="${point.x}"
	         cy="${point.y}"
	         r="3"
	         fill="${convertToTeam(neuralNetwork.getAcurateTeam(point))}"/>`
	    )}

	    <line x1="0" x2="${X2Cord}" y1="0" y2="${Y2Cord}" stroke="purple" />
	  </svg>`;

	return '';// generatedSVG;
}


module.exports = exports;