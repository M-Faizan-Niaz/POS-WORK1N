const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerDetails: {
      name: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      guests: { type: Number, required: true, min: 1 },
    },
    orderStatus: {
      type: String,
      required: true,
      enum: [
        "pending",
        "confirmed",
        "preparing",
        "served",
        "cancelled",
        "completed",
      ], // ✅ restrict to allowed values
      default: "pending",
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    bills: {
      totals: { type: Number, required: true, min: 0 },
      tax: { type: Number, required: true, min: 0 },
      totalWithTax: { type: Number, required: true, min: 0 },
    },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 },
      },
    ],
    table:{type: mongoose.Schema.Types.ObjectId, ref:"Table"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
