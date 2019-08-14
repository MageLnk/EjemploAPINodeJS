const router = require('express').Router();
const accountController = require('../controllers/auth')

router.get('/', accountController.get);
router.post('/token', accountController.postToken);

module.exports = router;