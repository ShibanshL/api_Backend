const mongoose = require("mongoose");
const msgSchema = new mongoose.Schema(
  {
    // msg: {
    name: String,
    // },
  },
  { versionKey: false }
);

const Msg = mongoose.model("msg", msgSchema);
module.exports = Msg;
