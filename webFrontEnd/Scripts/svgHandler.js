/**
* Fetches SVG from server and displays it on the page
*
*
*/

const canvasTargetID = 'targetCanvas';
const latestSVGResourceURL = 'http://localhost:5635/gridTest';


function getLastestSVG() {
	return new Promise((resolve, reject) => {

	// Wrap the fetch and response text resolve in a Promise

	fetch(latestSVGResourceURL)
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

setInterval(updateCanvas, 1000);