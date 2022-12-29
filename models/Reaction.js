const { Schema, Types } = require('mongoose');
const moment = require("moment");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      require: true,
      minlength: 1,
      maxlength: 280,
     
    },

    username: {
      type: String,
      require: true,
    },
    createAt: {

        type: Date,
        default: Date.now,
        get: (createdAtDate) => moment(createdAtDate).format("MM DD, YYYY [at] hh:mm a"),
      },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



module.exports = reactionSchema;
