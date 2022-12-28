const { Schema, model } = require('mongoose');
const moment = require("moment");
const reactionSchema = require('./Reaction');

// Schema to create though model
const thoughtSchema = new Schema(
  {
    thoughText: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      minlegth: 1,
      max_length: 280,
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: (createdAtDate) => moment(createdAtDate).format("MMM DD, YYYY [at] hh:mm a"),
    },

    username: {
        type: String,
        required: true,
    }, 

    reactions: [reactionSchema],
  },
  {
    toJSON: {
        virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactions").get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;