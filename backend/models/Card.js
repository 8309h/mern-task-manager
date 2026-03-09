const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({

      title: String,

      description: String,

      dueDate: Date,

      labels: [String],

      attachments: [String],

      listId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "List"
      }

});

module.exports = mongoose.model("Card", cardSchema);