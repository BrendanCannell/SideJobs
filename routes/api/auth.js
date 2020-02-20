const router = require("express").Router();
const auth = require('../../controllers/AuthControllers');

// restrict index for logged in user only
// router.get('/', auth.home);
router
    .route('/')
    .get(auth.home);

// route to register page
// router.get('/signup', auth.register);

// // route for register action
// router.post('/signup', auth.doRegister);

router 
    .route('/signup')
    .get(auth.register)
    .post(auth.doRegister);

// route to login page
router.get('/signin', auth.login);

// route for login action
router.post('/signin', auth.doLogin);

// route for logout action
router.get('/signout', auth.logout);

module.exports = router;