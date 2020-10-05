import Product from "../models/Products";
import Users from "../models/Users";
import { validationResult } from "express-validator";
export const getController = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) return res.status(200).json("Stock product is empty");
    const userSession = await Users.findOne({ _id: req.userId });
    res.status(200).json({ user: userSession.name, product });
  } catch (error) {
    console.error(error);
  }
};

export const getByIdController = async (req, res) => {
  try {
    //validation with express-validator
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    const product = await Product.findOne({ _id: req.params.id });
    //check de product exist
    if (!product) return res.status(404).json("This product not exist");
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
  }
};

export const postController = async (req, res) => {
  try {
    //Check the validaton with express-validator
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });

    let newProduct = new Product(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json("product not saved");
  }
};

export const putController = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json(error.array());
    const { id } = req.params;
    const producUpdated = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!producUpdated) return res.status(400).json("Product not exist");
    res
      .status(201)
      .json({ msg: "Product update succefully", data: producUpdated });
  } catch (error) {
    console.error(error);
  }
};

export const deleteController = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json(error.array());
    const { id } = req.params;

    await Product.findOneAndRemove({ _id: id });
    res.status(200).json("Product delete succesfully");
  } catch (error) {
    console.error(error);
  }
};
