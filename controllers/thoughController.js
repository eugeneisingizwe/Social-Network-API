const { User, Thought } = require('../models');

const thoughController = {

    // Create a new thought
    createThought(req, res){
        Thought.create(req.body)
        .then((though) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts: though._id}},
                {new: true}
            );
        }).then((user) =>
            !user
            ? res.status(404).json({
                message: "Though created, no idea found with the user!",
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
  getOneThough(req, res) {
    Course.findOne({ _id: req.params.thoughId })
      .select('-__v')
      .then((though) =>
        !though
          ? res.status(404).json({ message: 'No though with that ID' })
          : res.json(though)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Update a though bt id
  updateOneThough(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No though with this id!' })
          : res.json(though)
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err);
    })
        
  },

  // Delete a though
  deleteThough(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughId })
      .then((though) =>
        !though
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
        { _id: req.params.thoughId},
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
    Thought.findOneAndDelete(
        { _id: req.params.thoughId},
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



