import Product from "../models/Products";
import Users from "../models/Users";
export const getController = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) return res.status(200).json("Product stock is empty");
    const userSession = await Users.findOne({ _id: req.userId });
    res.status(200).json({ product, user: userSession.name });
  } catch (error) {
    console.error(error);
  }
};

export const getByIdController = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
  }
};

export const postController = async (req, res) => {
  try {
    let newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json("product not saved");
  }
};

export const putController = async (req, res) => {
  try {
    const { id } = req.params;
    const producUpdated = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res
      .status(201)
      .json({ msg: "Product update succefully", data: producUpdated });
  } catch (error) {
    console.error(error);
  }
};

export const deleteController = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findOneAndRemove({ _id: id });
    res.status(200).json("Product delete succesfully");
  } catch (error) {
    console.error(error);
  }
};
