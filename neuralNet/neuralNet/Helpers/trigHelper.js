/**
* TrigHelper
*
* A small helper module to provide basic trigonometry functions
*/

/**
* getPointOfIntercept
*
* Gets the point of intercept of two lines
* 
* line1	Line object
* line2	Line object
* returns Point object representing point of interception
*/
exports.getPointOfIntercept = (line1, line2) => {

	let combinedTranspose = line2.transpose - line1.transpose;
	let combinedGradiant = line1.gradiant - line2.gradiant;

	let xEqual = combinedTranspose / combinedGradiant;

	let yEqual = (line1.gradiant * xEqual) + line1.transpose;

	// Return a Point 
	return {y: yEqual ,x: xEqual};

}

/**
* getPointOfGridEdgeIntercept
*
* Getting the intercept of the far axes cannot be completed by
* merely calling getPointOfIntercept function because the 
* line x = {xMax} cannot be represented in form y=mx+c
* This function handles this and gets the correct interception
* point.
*
*  The far axes are the ones that are at the far edge of the
* visible grid.
* 
*/
exports.getPointOfGridEdgeIntercept = (line, xMax, yMax) => {

	// Attempt to see if it intercepts with far x edge
	let attemptToFindPointOnFarX = this.getPointOfIntercept(line, {gradiant: 0, transpose: yMax});

	if (attemptToFindPointOnFarX.x <= xMax) {
		return attemptToFindPointOnFarX;
	}

	// The intercept is with the far Y axes of the grid
	// Take the value of XMax and get the corresponding y value
	let yValueAtXMax = (line.gradiant * xMax) + line.transpose;

	// Return a Point 
	return {y: yValueAtXMax ,x: xMax};

}

module.exports = exports;