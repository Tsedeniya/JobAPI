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
 /**
 * @route POST /auth/signup
 * @group auth
 * @param {USER.model} user.body.required - new user
 
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
router.post('/signup',authController.signup);
/**
   * @typedef JOB
   * @property {string} username.required - A Unique user name
   * @property {string} email.required - A Unique email name
   * @property {string} password.required - A strong password
   */
/**
/**
 * Returns ALL Users
 * 
 * @route GET /auth/jobs
 * @group auth - Deals with all CRUD operations with job model
 * @param {string} sort.query - sort parament
 * @param {string} page.query - set the page number
 * @param {string} filter.query - set filter query 
 * @security JWT
 * @returns {object} 200 - Array of users
 * @returns {Error}  default - Unexpected error
 * 
   
 */
router.get('/jobs',job.getAlljobs);

module.exports = router;