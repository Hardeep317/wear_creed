import connectDB from "./middleware/mongoose";
import Products from "./models/Product";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Products.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.status(200).json({ success: "Items Updated successfully" });
  } else {
    res.status(400).json({ error: "Method not implemented" });
  }
};

export default connectDB(handler);
