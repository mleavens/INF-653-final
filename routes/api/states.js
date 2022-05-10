const express = require('express');
const router = express.Router();
const statesController = require('../../controllers/statesController');
const verifyState = require('../../middleware/verifyState');

router.route('/states')
    .get(statesController.getAllStates);

router.route('/:state')
    .get(verifyState(), statesController.getOneState);

router.route('/:state/capital')
    .get(verifyState(), statesController.getCapital);

module.exports = router;