const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: { type: String, required: false },
  name: { type: String, required: true },
  testimonial: { type: String, required: true },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
