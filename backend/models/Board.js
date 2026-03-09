const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({

      title: String,

      owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
      },

      members: [
            {
                  user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "User"
                  },
                  role: {
                        type: String,
                        enum: ["admin", "editor", "viewer"],
                        default: "viewer"
                  }
            }
      ]

});

module.exports = mongoose.model("Board", boardSchema);