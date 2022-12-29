
const { User } = require('../models');

// // TODO: Create an aggregate function to get the number of students overall
// const headCount = async () =>
//   Student.aggregate()
//     // Your code here
//     .count("studentCount")
//     .then((numberOfStudents) => numberOfStudents);

// // Execute the aggregate method on the Student model and calculate the overall grade by using the $avg operator
// const grade = async (studentId) =>
//   Student.aggregate([
//     // TODO: Ensure we include only the student who can match the given ObjectId using the $match operator
//     { $match: { _id: ObjectId(studentId)} },
//       // Your code here
    
//     {
//       $unwind: '$assignments',
//     },
//     // TODO: Group information for the student with the given ObjectId alongside an overall grade calculated using the $avg operator
//     {
//       // Your code here
//       $group: {
//         _id: ObjectId(studentId),
//         overallGrade: { $svg: "$assignments.score" },
//       },
//     },
//   ]);

const userController = {
  // Get all users
  getUsers(req, res) {
    User.find({})
      .then((users) => res.json(users))
      .catch((err) => res.status(500).josn(err));
  },

  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate("thoughts")
      .populate("friends")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No users with that ID' })
          : res.json(user),
          
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

 // Create users 
 createUser(req, res){
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err)); 
 },


// update a user by id
updatedUserbyId(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body},
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: 'No user found with that ID :(' })
        : res.json(user)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

  // Delete a user by id
  deleteUserById(req, res) {
    User.findOneAndRemove({ _id: req.params.usertId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json({ message: 'User successfully deleted' })
      )
    
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add a friend to a user
  addUserToFreind(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404).json({ message: 'No user found with that ID :(' })
              : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
},


//delete current friend 

deleteUserFreind(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId},
    {$pull: {friends: req.params.friendId}},
    { runValidators: true, new: true}
  )
  .then((user) => 
  !user
    ? res.status(404).josn({ message: "No user with this id!"})
    : res.josn({message: "friend successfully deleted"})
  )
  .catch((err) => res.status(500).josn(err))
},

};

module.exports = userController;

