const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name "],
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\S+@S+\.\s+/.test(v);
        },
        message: "Email must be i valid format ",
      },
    },
    phone: {
      type: Number,

      required: [true, "A user must have a password "],
      validate: {
        validator: function (v) {
          return /\d{11}/.texst(v);
        },
        message: "Phone number must be a 11-digit number!",
      },
    },
    role: {
      type: String,
      required: [true, "A user must have a role"],
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", UserSchema);
