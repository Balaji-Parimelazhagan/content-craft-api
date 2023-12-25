var express = require('express');
const {
  generateTags,
  generateJist,
  generateTitle,
  doAiMagic,
  improviseContent,
} = require('../controllers/aiGenerateControllers');
var router = express.Router();

router.route('/tags').post(generateTags);
router.route('/jist').post(generateJist);
router.route('/title').post(generateTitle);
router.route('/aiMagic').post(doAiMagic);
router.route('/improvisedContent').post(improviseContent);

module.exports = router;
