const express = require('express');
const router = express.Router();
const statesController = require('../../controllers/statesController');
const verifyState = require('../../middleware/verifyState');

router.route('/states')
    .get(statesController.getAllStates);

// router.route('/:id')
//     .get(statesController.getState);

module.exports = router;