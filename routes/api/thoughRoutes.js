const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getOneThought,
  updateOneThought,
  deleteThought,
  addReaction,
  deleteReaction,

} = require('../../controllers/thoughController');

// /api/users
router.route('/').get(getThoughts).post(createThought)

// /api/though/:thoughId
router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateOneThought)
  .delete(deleteThought);

  //post route /userId/freinds/friendId

  // router.route("./thought").post(createThought),

  router.route("/:thoughtId/reactions").post(addReaction)

  router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;