const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let assignroleSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId
    },
    name: {
      type : String,
    },
  },
  {
    collection: "Assignrole",
  }
);

module.exports = mongoose.model("Assignrole", assignroleSchema);
