const router = require('express-promise-router')();
const { has } = require('lodash');
const job = require('../../controllers/job-controller');
  
var {hasPermissions} = require('../../middleware/auth');
/**
   * @typedef JOB
   * @property {string} username.required - A Unique user name
   * @property {string} email.required - A Unique email name
   * @property {string} password.required - A strong password
   */

  //drug crud
  //add drugs
  /**
 * @route POST /jobs/create
 * @group job 
 * @param {JOB.model} user.body.required - new user
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
  router.post('/create',hasPermissions(['add job']),job.create);
  //get one drug
  /**
 * @route GET /jobs/{id}
 * @group job 
 * @param {string} id.path.required - user id
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
  router.get('/:id',hasPermissions(['view job']),job.getjobById);
  //get all drugs
 
  //search drugs by name 
  //delete a drug
  
  /**
 * @route DELETE /jobs/delete/:id
 * @group job 
 * @param {string} id.path.required - user id
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
  router.delete('/delete/:id',hasPermissions(['delete job']),job.deletejob);
  //update a drug
  /**
 * @route PATCH /jobs/update/:id
 * @group job 
 * @param {string} id.path.required - user id
 * @param {JOB.model} user.body.required - updated user
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
  router.patch('/update/:id',hasPermissions(['update job']), job.updatejob)
 

  /**
 * Returns ALL Users
 * 
 * @route GET /jobs
 * @group job - Deals with all CRUD operations with job model
 * @param {string} sort.query - sort parament
 * @param {string} page.query - set the page number
 * @param {string} filter.query - set filter query 

 * @returns {object} 200 - Array of users
 * @returns {Error}  default - Unexpected error
 * 
   
 */
router.get('/',job.getAlljobs);
  
module.exports = router;