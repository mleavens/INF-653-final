const express = require('express');
const router = express.Router();
const funFactsController = require('../../controllers/funFactsController');
// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

router.route('/funfacts')
    .get(funFactsController)
    // .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.createNewEmployee)
    // .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.updateEmployee)
    // .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);


module.exports = router;