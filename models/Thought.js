const { Schema, model } = require('mongoose');
const moment = require("moment");
const reactionSchema = require('./Reaction');

// Schema to create though model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlenght: 1,
      max_length: 50,
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
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;