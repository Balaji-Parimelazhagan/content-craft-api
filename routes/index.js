var express = require('express');
const aiGeneraterRoutes = require('./aiGeneraterRoutes');
var router = express.Router();
const middleware = (req, res, next) => next();
/* GET home page. */
router.use('/generate', middleware, aiGeneraterRoutes);

module.exports = router;
