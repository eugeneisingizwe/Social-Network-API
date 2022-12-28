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
    emial: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      minlength: 4,
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
      freinds: [
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
    id: false,
  }
);

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

userSchema.virtual("friends").get(function() {
    return this.freinds.length
})

const User = model("User", userSchema)
module.exports = User;