/**
 * Index Router
 *
 * Handles the root path of the API
 */
const express = require('express');
const router = express.Router();
const logger = require('../Helpers/LogHelper').getLogger(__filename);
const apiVersion = require('../package').version;

const neuralNetworkController = require('../neuralNet/neuralNetworkController');

router.get('/', function (req, res, next) {
    logger.debug('Responding to caller with API name and version');

    res.send({msg: 'NuralNet API', version: apiVersion});
});

router.get('/gridTest', function(req, res, next){

	// No attempt at validation/security is made
	const X_MAX  = req.query.xmax;
	const Y_MAX =  req.query.ymax;

	const decisionLineGradiant = req.query.decisionLineGradiant;
	const decisionLineTranspose = req.query.decisionLineTranspose;


	const generatedSVG = neuralNetworkController.getVisual(X_MAX, Y_MAX, decisionLineGradiant, decisionLineTranspose);
	res.send(generatedSVG);

});

router.get('/getVisualByMath', function(req, res, next){

	const X_MAX  = 1100;
	const Y_MAX = 1100;

	const generatedSVG = neuralNetworkController.getVisualByMath(X_MAX, Y_MAX);
	res.send(generatedSVG);

});

module.exports = router;