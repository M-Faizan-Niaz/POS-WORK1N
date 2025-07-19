const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
    },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: "Email must be in a valid format",
      },
    },
    phone: {
      type: Number,
      required: [true, "A user must have a phone number"],
      validate: {
        validator: function (v) {
          return /^\d{11}$/.test(v.toString());
        },
        message: "Phone number must be an 11-digit number!",
      },
    },
    role: {
      type: String,
      required: [true, "A user must have a role"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
      minlength: [6, "Password must be at least 6 characters long"],
      //select: false, // Do not return password by default
    },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password during login


module.exports = mongoose.model("User", UserSchema);
