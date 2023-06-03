import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  res.status(200).json({
    124001: ["Rohtak", "Haryana"],
    131302: ["Gohana", "Haryana"],
    110001: ["New Delhi", "Delhi"],
    530068: ["Bengaluru", "Karnataka"],
    110038: ["South West Delhi", "Delhi"],
    101213: ["Vadodara", "Gujarat"],
  });
};

export default connectDB(handler);
