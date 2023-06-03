import connectDB from "../../middleware/mongoose";
import Products from "../../models/Product";

const handler = async (req, res) => {
  res.status(200).json({ name: "Hardeep" });
};

export default connectDB(handler);
