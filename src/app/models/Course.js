const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, require: true },
    desc: { type: String, maxLength: 600 },
    img: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoID: { type: String, maxLength: 255, require: true },
    level: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
