const { User, Thought } = require('../models');

const thoughController = {

    // Create a new thought
    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts: thought._id}},
                {new: true}
            );
        }).then((user) =>
            !user
            ? res.status(404).json({
                message: "no id found with the user!",
            })
            : res.json("Though created!")
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

  // Get all thoughts
  getThoughts(req, res) {

      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
  },


  // Get a though by its id
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No though with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Update a though bt id
  updateOneThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No though with this id!' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err);
    })
        
  },

  // Delete a though
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No though with that ID' })
          : res.json({ message: "Though deleted!" })
      )
    
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
  
  });

},

// Add a new reaction

addReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        {$addToSet: { reactions: req.body }},
        { runValidators: true, new: true}
    )

    .then((reaction) => 
        !reaction
        ? res.status(400).json({ message: "No though found with this id!"})
        : res.json({message: "Reaction has been addded"})
    )
    .catch((err) => res.status(500).json(err));

},

// Delete reaction 

deleteReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        {$pull: {reactions: { reactionId: req.params.reactionId }}},
        { runValidators: true, new: true}
    )
    .then((reaction) => 
        !reaction
        ? res.status(400).json({ message: "reaction found with this ID!"})
        : res.json({ message: "reaction has been deleted"})
    )
    .catch((err) => res.status(500).json(err));
},

};

 module.exports = thoughController;



