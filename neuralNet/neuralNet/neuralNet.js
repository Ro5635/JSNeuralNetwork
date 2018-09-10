const pointsGenerator = require('./pointsGenerator');

// Draw some points onto a grid

const X_MAX  = 1100;
const Y_MAX = 1100;


/**
* getTeam
*
* Gets the team that the point should be on based on pure
* mathematical reason.
*/
function getTeam(point) {
	// if y > x you are above the line y=x
	if (point.y > point.x) {
		return 'blue';
	} else {
		return 'red';
	}
} 





exports.getVisual = () => {
	const randomPoints = pointsGenerator.getRandomPoints(300, 0, 1100);

	const generatedSVG = `<svg width="${X_MAX}" height="${Y_MAX}">
	   
	${randomPoints.map(point => 
	      `<circle 
	         cx="${point.x}"
	         cy="${point.y}"
	         r="3"
	         fill="${getTeam(point)}"/>`
	    )}
	    <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="purple" />
	  </svg>`;

	return generatedSVG;
}

/**
* getVisualByMath
*
* Gets a svg visual where the points are sorted into teams based on
* mathematics. As a result is accurate and correct.
*/
exports.getVisualByMath = () => {
	const randomPoints = pointsGenerator.getRandomPoints(300, 0, 1100);

	const generatedSVG = `<svg width="${X_MAX}" height="${Y_MAX}">
	   
	${randomPoints.map(point => 
	      `<circle 
	         cx="${point.x}"
	         cy="${point.y}"
	         r="3"
	         fill="${getTeam(point)}"/>`
	    )}
	    <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="purple" />
	  </svg>`;

	return generatedSVG;
}


