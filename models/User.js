const { Schema, model } = require('mongoose');
// const { User } = require('.');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please provide a valid email"
      ],

    },
    thoughts: [ 
        {
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }
    ], 
      friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
      ],

    },

  {
    toJSON: {
    virtuals: true,
      getters: true,
    },
    // id: false,
  }
);

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

userSchema.virtual("friendCount").get(function() {
    return this.friends.length
})

const User = model("User", userSchema)
module.exports = User;