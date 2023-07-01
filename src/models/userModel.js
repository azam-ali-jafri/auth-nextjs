import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: String,
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: String,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
