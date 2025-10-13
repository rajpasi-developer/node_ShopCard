import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    let { name, description, price, category, subCategory, sizes, bestseller } =
      req.body;

    let image1 = await uploadOnCloudinary(req.files.image1[0].path);
    let image2 = await uploadOnCloudinary(req.files.image2[0].path);
    let image3 = await uploadOnCloudinary(req.files.image3[0].path);
    let image4 = await uploadOnCloudinary(req.files.image4[0].path);

    let productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      date: Date.now(),
      bestseller: bestseller === "true" ? true : false,
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);

    return res.status(201).json(product);
  } catch (error) {
    console.log("AddProduct error");
    res.status(500).json({ message: `AddProduct error: ${error.message}` });
  }
};

export const listProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    console.log(product);
    return res.status(200).json(product);
  } catch (error) {
    console.log("ListProduct error");
    res.status(500).json({ message: `ListProduct error: ${error.message}` });
  }
};

export const removeProduct = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    const product = await Product.findByIdAndDelete(id);

    return res.status(200).json(product);
  } catch (error) {
    console.log("Remove Product error");
    res.status(500).json({ message: `Remove Product error: ${error.message}` });
  }
};
