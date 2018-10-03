/**
* Test of creating and populating a SVG grid with points 
*
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandPoint() {
	return {
		x: getRandomInt(0, 800),
		y: getRandomInt(0, 800)
	}
} 


function getArrayOfRandomPoints(num) {
	let randomPoints = [];

	for (var i = 0; i <= num; i++) {
		randomPoints.push(getRandPoint());	
	}

	return randomPoints;
}


const randomPoints = getArrayOfRandomPoints(5);

exports.getRandomPoints(numOfPoints) => {

}

module.exports = exports;