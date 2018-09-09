const pointsGenerator = require('./pointsGenerator');

// Draw some points onto a grid

const X_MAX  = 1100;
const Y_MAX = 1100;



exports.getVisual = () => {
	const randomPoints = pointsGenerator.getRandomPoints(250, 0, 1100);

	const generatedSVG = `<svg width="${X_MAX}" height="${Y_MAX}">
	   
	${randomPoints.map(point => 
	      `<circle 
	         cx="${point.x}"
	         cy="${point.y}"
	         r="3"
	         fill="red"/>`
	    )}
	    <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="purple" />
	  </svg>`;

	return generatedSVG;
}




