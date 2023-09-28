import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 10,
  },
  pdfPath: String,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" }
});

const Module = mongoose.model("Module", moduleSchema);

export default Module;

