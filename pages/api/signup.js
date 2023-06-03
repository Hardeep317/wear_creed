import connectDB from "../../middleware/mongoose";
import User from "@/models/User";
import bcrypt from "bcrypt";

const userExists = async (email) => {
  let userE = await User.findOne({ email: email });

  if (userE) {
    return userE;
  } else {
    return false;
  }
};

const encap = (plaintext) => {
  const enpass = bcrypt.hashSync(plaintext, 10);

  return enpass;
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await userExists(req.body.email);

    if (response) {
      res.status(401).send({
        responseStatus: "Failed",
        data: null,
        message: "",
        error: "User already exists",
        request: "Ok",
      });
      return;
    } else {
      let enpass = encap(req.body.password);
      req.body.password = enpass;

      let user = new User(req.body);
      await user.save();
      res.status(201).send({
        response: "Success",
        message: "User registered successfully",
        error: "",
        data: response,
        request: "Ok",
      });
    }
  }
};

export default connectDB(handler);
