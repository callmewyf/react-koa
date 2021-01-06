const router = require('koa-router')();
const auth = require('./../controllers/user');

router.get('/user/:id', auth.getUserInfo);
router.post('/user', auth.postUserAuth);

module.exports = router;