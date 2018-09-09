/**
 * Index Router
 *
 * Handles the root path of the API
 */
const express = require('express');
const router = express.Router();
const logger = require('../Helpers/LogHelper').getLogger(__filename);
const apiVersion = require('../package').version;

const neuralNet = require('../neuralNet/neuralNet');

router.get('/', function (req, res, next) {
    logger.debug('Responding to caller with API name and version');

    res.send({msg: 'NuralNet API', version: apiVersion});
});

router.get('/gridTest', function(req, res, next){

	const generatedSVG = neuralNet.getVisual();
	res.send(generatedSVG);

});

module.exports = router;