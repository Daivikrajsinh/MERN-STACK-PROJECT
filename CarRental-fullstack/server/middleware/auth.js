import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;
//   console.log(token);
  if (!token) {
    return res.json({ success: false, message: "not authorized" });
  }
  try {
    const userId = jwt.decode(token, process.env.JWT_SECRET);
    // console.log(userId);
    if (!userId) {
      return res.json({ success: false, message: "not authorized" });
    }
    req.user = await User.findById(userId).select("-password");
    // console.log(req.user);
    next();
  } catch (error) {
    return res.json({ success: false, message: "not authorized" });
  }
};
