import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: String,
  semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester' },
});

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject
