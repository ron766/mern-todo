const router = require('express').Router();
const controller = require('./controller');


router.get('/getTasks', controller.showTasks);

module.exports = router
