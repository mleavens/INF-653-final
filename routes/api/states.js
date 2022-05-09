const express = require('express');
const router = express.Router();
const path = require('path');
const statesController = require('../../controllers/statesController');
// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

router.route('/states')
    .get(statesController.getAllStates);

// router.route('/:id')
//     .get(statesController.getState);

module.exports = router;