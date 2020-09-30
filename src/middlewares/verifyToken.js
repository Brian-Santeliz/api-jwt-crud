import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(400).json("No token provided");

  try {
    const tokenVerify = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = tokenVerify.id;
    next();
  } catch (error) {
    res.status(403).json("the token is invalid");
  }
};
export default verifyToken;
