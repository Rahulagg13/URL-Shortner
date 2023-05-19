const shortid = require("shortid");
const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    redirectUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      unique: true,
      required: true,
      default: shortid.generate,
    },
    history: [{ timestamp: { type: String } }],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
urlSchema.pre(/^find/, function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});
module.exports = mongoose.model("url", urlSchema);
