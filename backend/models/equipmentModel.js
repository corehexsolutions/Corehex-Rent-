const mongoose = require("mongoose");

const specSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    brand: String,

    model: String,

    tagline: String,

    description: {
      type: String,
      required: true,
    },

    dailyRate: {
      type: Number,
      default: 0,
    },

    weeklyRate: {
      type: Number,
      default: 0,
    },

    monthlyRate: {
      type: Number,
      default: 0,
    },

    totalQuantity: {
      type: Number,
      default: 0,
    },

    availableQuantity: {
      type: Number,
      default: 0,
    },

    thumbnail: String,

    status: {
      type: String,
      enum: ["active", "draft", "out-of-stock"],
      default: "active",
    },

    specs: [specSchema],

    accessories: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Equipment", equipmentSchema);