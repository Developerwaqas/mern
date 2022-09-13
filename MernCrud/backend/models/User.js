const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId
    },
    name: {
      type: String,
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", userSchema);
