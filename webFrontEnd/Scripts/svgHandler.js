/**
* Fetches SVG from server and displays it on the page
*
* Rough and ready code, will swap for angular if I take this project further 
*/

const canvasTargetID = 'targetCanvas';
const latestSVGResourceURL = 'http://localhost:5635/gridTest';


function getLastestSVG() {
	return new Promise((resolve, reject) => {

	// Get the target params from the DOM
	const targetLine = getTargetLineParams();

	// Wrap the fetch and response text resolve in a Promise
	fetch(latestSVGResourceURL + `?xmax=1100&ymax=1100&decisionLineGradiant=${targetLine.gradiant}&decisionLineTranspose=${targetLine.transpose}`)
	.then( response => {
		if (response.status !== 200) {
			console.log('There was a problem. Status Code: ' +
				response.status);
			return;
		}

		response.text().then(svgText => {

			return resolve(svgText);

		});	
	})
	.catch( err => {
		console.log('Fetch Error :-S', err);
		return reject(err);
	});
});

}

function putSVGToCanvas(svgToPaint){
	const targetCanvas = document.getElementById(canvasTargetID);
	targetCanvas.innerHTML = svgToPaint;
	
}

function updateCanvas(){
	getLastestSVG()
	.then(newSVG => {
		putSVGToCanvas(newSVG);
		console.log('Updated canvas');

	})
	.catch(err => {
		console.error('Failed to update canvas SVG');
		console.error(err);

	})
	
}

/**
* getTargetLineParams
*
* Gets the params for the target line
* from the DOM
* returns Line 
*/
function getTargetLineParams(){
	const lineGradiant = document.getElementById('targetGradiant').value;
	const lineTranspose = document.getElementById('targetTranspose').value;
console.log({gradiant: lineGradiant, transpose: lineTranspose});
	return {gradiant: lineGradiant, transpose: lineTranspose};

}

setInterval(updateCanvas, 1000);