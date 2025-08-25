import express from "express";
import Product from "../models/product.js";

const router = express.Router();

// GET /api/products → all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products); // return as JSON
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/products/:id → single product by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
