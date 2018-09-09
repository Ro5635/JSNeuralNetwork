/**
* Test of creating and populating a SVG grid with points 
*
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandPoint(min, max) {
	return {
		x: getRandomInt(min, max),
		y: getRandomInt(min, max)
	}
} 


function getArrayOfRandomPoints(num, min, max) {
	let randomPoints = [];

	for (var i = 0; i <= num; i++) {
		randomPoints.push(getRandPoint(min, max));	
	}

	return randomPoints;
}

exports.getRandomPoints = (numOfPoints, min, max) => {
	return getArrayOfRandomPoints(numOfPoints, min, max);

}

module.exports = exports;