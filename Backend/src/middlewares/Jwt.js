import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  let token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode.userData;
    next();
  } catch (error) {
    res.status(408).json({ error: "Invalid token" });
  }
};

const generateToken = (userData) => {
  return jwt.sign({ userData }, process.env.JWT_SECRET, { expiresIn: "1D" });
};

module.exports = { verifyToken, generateToken };
