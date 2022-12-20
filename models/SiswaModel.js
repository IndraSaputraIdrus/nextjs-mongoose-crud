import mongoose from "mongoose";

const siswaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const siswaModel =
  mongoose.models.student || mongoose.model("student", siswaSchema);

export default siswaModel;
