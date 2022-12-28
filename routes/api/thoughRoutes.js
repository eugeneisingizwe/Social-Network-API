const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getOneThough,
  updateOneThough,
  deleteThough,
  addReaction,
  deleteReaction,

} = require('../../controllers/thoughController');

// /api/users
router.route('/').get(getThoughts);

// /api/though/:thoughId
router
  .route('/:thoughtId')
  .get(getOneThough)
  .put(updateOneThough)
  .delete(deleteThough);

  //post route /userId/freinds/friendId

  router.route("./thought").post(createThought),

  router.route("./:thoughtId/reactions").post(addReaction)

  router.route("./thoughtID/reactions/:reactionId").delete(deleteReaction);

module.exports = router;