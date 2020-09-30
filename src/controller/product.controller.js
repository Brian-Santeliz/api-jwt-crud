import Product from "../models/Products";

export const getController = async (req, res) => {
  const product = await Product.find();
  if (!product) return res.status(200).json("Product stock is empty");

  res.status(200).json(product);
};

export const getByIdController = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.status(200).json(product);
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
  const { id } = req.params;
  const producUpdated = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res
    .status(201)
    .json({ msg: "Product update succefully", data: producUpdated });
};

export const deleteController = async (req, res) => {
  const { id } = req.params;
  await Product.findOneAndRemove({ _id: id });
  res.status(200).json("Product delete succesfully");
};
