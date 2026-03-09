const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({

      title: String,

      boardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board"
      },

      position: Number

});

module.exports = mongoose.model("List", listSchema);