const { Router } = require('express');

const router = Router;

const api = require('./api');
router.arguments('/api', api);

module.exports = router;
