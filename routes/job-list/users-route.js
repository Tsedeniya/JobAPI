

const router = require('express-promise-router')();
var {hasPermissions} = require('../../middleware/auth')
  const userController = require('../../controllers/user-controller');

  /**
   * @typedef USER
   * @property {string} username.required - A Unique user name
   * @property {string} email.required - A Unique email name
   * @property {string} password.required - A strong password
   */
  /**
 * Returns ALL Users
 * 
 * @route GET /users
 * @group user - Deals with all CRUD operations with user model
 * @param {string} sort.query - sort parament
 * @param {string} page.query - set the page number
 * @param {string} filter.query - set filter query 
 * @security JWT
 * @returns {object} 200 - Array of users
 * @returns {Error}  default - Unexpected error
 * 
   
 */
router.get('/',hasPermissions(['veiw all user']),userController.getAllUsers)
/**
 * @route GET /users/{id}
 * @group user 
 * @param {string} id.path.required - user id
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
 router.get('/:id',hasPermissions(['view user']), userController.getUserById);
  //create user
  /**
 * @route POST /users/create
 * @group user 
 * @param {USER.model} user.body.required - new user
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
  router.post('/create',hasPermissions(['add user']),userController.create);

  /**
 * @route DELETE /users/delete/:id
 * @group user 
 * @param {string} id.path.required - user id
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
  //delete user
  router.delete('/delete/:id',hasPermissions(['delete user']) ,userController.deleteUser);
  //update user
  /**
 * @route PATCH /users/update/:id
 * @group user 
 * @param {string} id.path.required - user id
 * @param {USER.model} user.body.required - updated user
 * @security JWT
 *@returns {object} -200 user object 
 * @returns {Error} default - unexpected error
  */
  router.patch('/update/:id',hasPermissions(['update user']),userController.updateUser)

  //view a user 
 

  //view all users
  



module.exports = router;
/* GET users listing. */


