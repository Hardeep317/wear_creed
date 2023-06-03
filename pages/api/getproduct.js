import connectDB from "../../middleware/mongoose";
import Products from "../../models/Product";

const handler = async (req, res) => {
  let body = req.query.slug;
  let product = await Products.findOne({ slug: body });
  res.status(200).json({ product });
};

export default connectDB(handler);
