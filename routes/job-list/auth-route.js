const router = require('express-promise-router')();

const authController = require('../../controllers/auth-controller');
const job = require('../../controllers/job-controller');
/**
   * @typedef USER
   * @property {string} username.required - A Unique user name
   * @property {string} email.required - A Unique email name
   * @property {string} password.required - A strong password
   */
/**
 * @route POST /auth/login
 * @group auth
 * @param {USER.model} user.body.required - user authentication body
 * 
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */

router.post('/login',authController.login);
router.post('/signup',authController.signup);
router.get('/jobs',job.getAlljobs);

module.exports = router;