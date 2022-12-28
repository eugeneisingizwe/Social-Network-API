const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  updatedUserbyId,
  deleteUserById,
  addUserToFreind,
  deleteUserFreind,

} = require('../../controllers/UserController');

// /api/users
router.route('/').post(createUser).get(getUsers);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updatedUserbyId)
  .delete(deleteUserById);

  //post route /userId/freinds/friendId

  router
   .route("./userID/friends/:frindId")
   .post(addUserToFreind)
   .delete(deleteUserFreind);

module.exports = router;
