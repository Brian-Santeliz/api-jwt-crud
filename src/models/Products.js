import { model, Schema } from "mongoose";

const schemaProducts = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    imgUrl: {
      type: String,
      trim: true,
      required: true,
    },
    Date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);
export default model("Produts", schemaProducts);
