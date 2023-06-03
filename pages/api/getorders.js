import connectDB from "../../middleware/mongoose";
import Order from "@/models/Order";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let body = req.body;

    let orders = await Order.find({ email: body.email });
    await res.send(orders);
  }
};

export default connectDB(handler);
